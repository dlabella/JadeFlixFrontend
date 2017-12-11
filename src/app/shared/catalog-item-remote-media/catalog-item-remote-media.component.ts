import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CatalogItem } from '../../models/catalog-item';
import { RemoteMediaSource } from '../../models/remote-media-source';
import { MediaSource } from '../../models/media-source';
import { CatalogService } from '../../services/catalog.service';
import { CatalogItemRemoteMedia } from '../../models/catalog-item-remote-media';
import { CatalogItemDownloadSelection } from '../../models/catalog-item-download-selection';
import { DownloadInfo } from '../../models/download-info';

@Component({
  selector: 'catalog-item-remote-media',
  templateUrl: './catalog-item-remote-media.component.html',
  styleUrls: ['./catalog-item-remote-media.component.css']
})
export class CatalogItemRemoteMediaComponent implements OnInit {
  @Input() Item:CatalogItem;
  @Output() UpdateDownloadLocations = new EventEmitter<CatalogItemRemoteMedia>();
  @Output() DownloadSelected = new EventEmitter<CatalogItemDownloadSelection>();

  constructor(private catalog:CatalogService) { }

  OnRequestDownloadOptions(media:RemoteMediaSource){
    console.log("FillDownloadOptions: "+media.Name);
    let dowloadLocationRequest = new CatalogItemRemoteMedia();
    dowloadLocationRequest.CatalogItem = this.Item;
    dowloadLocationRequest.MediaSource = media;

    this.UpdateDownloadLocations.emit(dowloadLocationRequest);
  };
  
  OnDownloadSelected(item:CatalogItem, media:MediaSource, downloadOption:MediaSource){
    let downloadSelected = new CatalogItemDownloadSelection();
    downloadSelected.CatalogItem = this.Item;
    downloadSelected.Media = media;
    downloadSelected.Download=downloadOption;

    this.DownloadSelected.emit(downloadSelected);
  }

  getDowloadPercentCompleted(downloadInfo:DownloadInfo):number{
    if (downloadInfo != null &&
        downloadInfo.BytesTotal>0 &&
        downloadInfo.BytesReceived>0) 
    {
      return ((downloadInfo.BytesReceived/downloadInfo.BytesTotal)*100)
    }
    return 0;
  }

  ngOnInit() {
  }

}
