import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogItem } from '../../models/catalog-item';
import { CatalogService } from '../../services/catalog.service';
import { DownloadService } from '../../services/download.service';
import { LoggerService } from '../../services/logger.service';
import { Params } from '@angular/router';
import { CatalogItemRemoteMedia } from '../../models/catalog-item-remote-media';
import { CatalogItemMedia } from '../../models/catalog-item-media';
import { CatalogItemDownloadSelection } from '../../models/catalog-item-download-selection';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { Observable } from 'rxjs/Observable';
import { DownloadInfo } from '../../models/download-info';
import { RemoteMediaSource } from '../../models/remote-media-source';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NotificationsService } from 'angular2-notifications';

@Component({
	selector: 'app-catalog-item',
	templateUrl: './catalog-item.component.html',
	styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit, OnDestroy {
	loading: boolean;
	catalogItem: CatalogItem;
	private activeDownloads: Subscription;

	constructor(
		private route: ActivatedRoute,
		private catalogService: CatalogService,
		private downloadService: DownloadService,
		private logger:LoggerService,
		private notifications:NotificationsService
	) {
		this.loading = true;
	};

	ngOnDestroy(): void {
		this.activeDownloads.unsubscribe();
	}

	ngOnInit(): void {
		this.route.params
			.switchMap((params: CatalogItem) =>
				this.catalogService.getItem(params.scrapedBy, params.groupName, params.kindName, params.nId, params.uId))
			.subscribe((catalogItem: CatalogItem) => {
				this.loading = false;
				this.catalogItem = catalogItem;
			});

		this.activeDownloads = IntervalObservable.create(5000).subscribe(() => this.getActiveDownloads());
	};

	batchDownload():void{
		this.downloadService.batchDownload(this.catalogItem.scrapedBy,this.catalogItem.groupName,this.catalogItem.kindName,this.catalogItem.uId)
		.subscribe(result => this.logger.Info("Batch Key: "+result));
	}

	private getActiveDownloads(): void {
		this.downloadService.getActiveDownloads().subscribe(result => this.updateMediaDownloadProgress(result));
	};

	private updateMediaDownloadProgress(downloads: DownloadInfo[]): void {
		for (var i = 0; i < downloads.length; i++) {
			this.catalogItem.media.remote.forEach((remoteItem, index) => {
				if (remoteItem.uId === downloads[i].id) {
					this.updateDownloadData(downloads[i], remoteItem);
				}
			});
		};
	}

	private updateDownloadData(info: DownloadInfo, media: RemoteMediaSource): void {
		media.downloading = !info.isCompleted;
		media.queued = info.isQueued;
		media.percentCompleted = info.percentCompleted;
	}

	onUpdateCatalogItemOptions(catalogItemMedia: CatalogItemRemoteMedia) {
		console.log("Updating Catalog Options ...");
		this.catalogService
			.getMedia(catalogItemMedia.catalogItem.scrapedBy, catalogItemMedia.mediaSource.uId)
			.subscribe(options => {
				catalogItemMedia.mediaSource.downloadLocations = options;
			});
	};

	onDownloadSelected(catalogItemMedia: CatalogItemDownloadSelection) {
		console.log("Getting real Url ...");
		catalogItemMedia.media.queued = true;
		this.catalogService.getMediaUrl(catalogItemMedia.catalogItem.scrapedBy, catalogItemMedia.download.uId)
			.subscribe(
			url => {
				console.log("Enqueuing ...");
				this.downloadService.download(
					catalogItemMedia.media.uId,
					catalogItemMedia.catalogItem.groupName,
					catalogItemMedia.catalogItem.kindName,
					catalogItemMedia.catalogItem.name,
					catalogItemMedia.media.name + ".mp4",
					url.uId
				).subscribe();
			});
	}
}
