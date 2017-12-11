import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogItem } from '../../models/catalog-item';
import { CatalogService } from '../../services/catalog.service';
import { DownloadService } from '../../services/download.service';
import { LoggerService } from '../../services/logger.service';
import 'rxjs/add/operator/switchMap';
import { Params } from '@angular/router';
import { CatalogItemRemoteMedia } from '../../models/catalog-item-remote-media';
import { CatalogItemMedia } from '../../models/catalog-item-media';
import { CatalogItemDownloadSelection } from '../../models/catalog-item-download-selection';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { Observable } from 'rxjs/Observable';
import { DownloadInfo } from '../../models/download-info';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  Item: CatalogItem;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: CatalogItem) =>
        this.catalogService.getItem(params.ScrapedBy, params.KindName, params.GroupName, params.NId, params.UId))
      .subscribe((item: CatalogItem) => {
        this.Item = item;
      });

    IntervalObservable.create(1000).subscribe(() => this.downloadService.getActiveDownloads().then(
      result => {
        for(var i=0;i<result.length;i++){
          this.Item.Media.Remote.forEach((remoteItem,index)=>{
            if (remoteItem.UId === result[i].Id){
              remoteItem.DownloadState = result[i];
            }
          });
        };
      }));
  };

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private downloadService: DownloadService) {

  };

  
  OnUpdateCatalogItemOptions(catalogItemMedia: CatalogItemRemoteMedia) {
    console.log("Updating Catalog Options ...");
    this.catalogService
      .getMedia(catalogItemMedia.CatalogItem.ScrapedBy, catalogItemMedia.MediaSource.UId)
      .then(options => {
        catalogItemMedia.MediaSource.DownloadLocations = options;
      });
  };

  OnDownloadSelected(catalogItemMedia: CatalogItemDownloadSelection) {

    console.log("Getting real Url ...");
    this.catalogService.getMediaUrl(catalogItemMedia.CatalogItem.ScrapedBy, catalogItemMedia.Download.UId).then(
      url => {
        console.log("Enqueuing ...");
        this.downloadService.download(
          catalogItemMedia.Media.UId,
          catalogItemMedia.CatalogItem.GroupName,
          catalogItemMedia.CatalogItem.KindName,
          catalogItemMedia.CatalogItem.Name,
          catalogItemMedia.Media.Name + ".mp4",
          url.UId
        );
      });

  }
}
