import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CatalogItem } from '../../models/catalog-item';
import { RemoteMediaSource } from '../../models/remote-media-source';
import { MediaSource } from '../../models/media-source';
import { CatalogService } from '../../services/catalog.service';
import { CatalogItemRemoteMedia } from '../../models/catalog-item-remote-media';
import { CatalogItemDownloadSelection } from '../../models/catalog-item-download-selection';
import { DownloadInfo } from '../../models/download-info';
import { Observable } from 'rxjs/Observable';

@Component({

	selector: 'catalog-item-remote-media',
	templateUrl: './catalog-item-remote-media.component.html',
	styleUrls: ['./catalog-item-remote-media.component.css']

})
export class CatalogItemRemoteMediaComponent {

	@Input() catalogItem: CatalogItem;
	@Output() updateDownloadLocations = new EventEmitter<CatalogItemRemoteMedia>();
	@Output() downloadSelected = new EventEmitter<CatalogItemDownloadSelection>();

	constructor(private catalog: CatalogService) { }

	onRequestDownloadOptions(media: RemoteMediaSource) {
		console.log("FillDownloadOptions: " + media.name);
		let dowloadLocationRequest = new CatalogItemRemoteMedia();
		dowloadLocationRequest.catalogItem = this.catalogItem;
		dowloadLocationRequest.mediaSource = media;

		this.updateDownloadLocations.emit(dowloadLocationRequest);
	};

	onDownloadSelected(item: CatalogItem, media: RemoteMediaSource, downloadOption: MediaSource) {
		let downloadSelection = new CatalogItemDownloadSelection();
		downloadSelection.catalogItem = this.catalogItem;
		downloadSelection.media = media;
		downloadSelection.download = downloadOption;

		this.downloadSelected.emit(downloadSelection);
	}



}
