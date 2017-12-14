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

@Component({
	selector: 'app-catalog-item',
	templateUrl: './catalog-item.component.html',
	styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit, OnDestroy {
	catalogItem: CatalogItem;
	private activeDownloads: Subscription;

	constructor(
		private route: ActivatedRoute,
		private catalogService: CatalogService,
		private downloadService: DownloadService) {

	};

	ngOnDestroy(): void {
		this.activeDownloads.unsubscribe();
	}

	ngOnInit(): void {
		this.route.params
			.switchMap((params: CatalogItem) =>
				this.catalogService.getItem(params.scrapedBy, params.kindName, params.groupName, params.nId, params.uId))
			.subscribe((item: CatalogItem) => {
				this.catalogItem = item;
			});

		this.activeDownloads = IntervalObservable.create(1000).subscribe(() => this.getActiveDownloads());
	};

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
		media.downloadPercentCompleted = info.percentCompleted;
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
