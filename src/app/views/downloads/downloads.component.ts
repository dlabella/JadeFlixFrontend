import { Component, OnInit } from '@angular/core';
import { DownloadInfo } from '../../models/download-info';
import { RemoteMediaSource } from '../../models/remote-media-source';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { DownloadService } from '../../services/download.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit, OnDestroy {

  private activeDownloads: Subscription;
  downloads: DownloadInfo[];
  constructor(private downloadService: DownloadService,
  private notifications:NotificationsService) { }
  working: boolean;

  ngOnInit() {
    this.getActiveDownloads();
    this.activeDownloads = IntervalObservable.create(5000).subscribe(() => this.getActiveDownloads());
  }
  ngOnDestroy(): void {
    this.activeDownloads.unsubscribe();
  }

  private getActiveDownloads(): void {
    if (this.working) return;
    this.working = true;

    this.downloadService.getDownloads()
      .catch(err => {
        this.downloads = [];
        this.working = false;
        this.notifications.error("Api Call Error",(err.message || err));
        return Promise.reject(err.message || err);
      })
      .subscribe(
      result => {
        this.working = false;
        this.downloads = result
      });
  };

}
