
import {catchError} from 'rxjs/operators';
import { Component, OnInit, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { CoreModule } from '../../core/core.module'
import { CatalogItem } from '../../models/catalog-item';
import { CatalogService } from '../../services/catalog.service';
import { Router } from '@angular/router';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';
import { fadeInContent } from '@angular/material';
import {SnotifyService, SnotifyPosition, SnotifyToastConfig} from 'ng-snotify';
import { SessionService } from '../../services/session.service';
import { LazyImageLoaderService } from '../../services/lazy-image-loader.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewChecked {
  catalogItems: CatalogItem[];
  loading: boolean;

  constructor(
    private router: Router,
    private catalogService: CatalogService,
    private notifications: SnotifyService,
    private session: SessionService,
    private imageLoader: LazyImageLoaderService
  ) {

    this.loading = false;
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.imageLoader.ProcessChanges();
  }

  cardButtonClick(catalogItem: CatalogItem): void {
    this.session.set("selectedItem", catalogItem).subscribe(result => {
      this.router.navigate(['/catalog-item']);
    });
  }

  runSearch(filter: string): void {
    this.catalogItems = null;
    this.loading = true;
    this.catalogService.findItem("AnimeFlv", filter).pipe(
      catchError(err => {
        this.catalogItems = [];
        this.loading = false;
        this.notifications.error("Api Call Error", err.message || err);
        return Promise.reject(err.message || err);
      }))
      .subscribe(items => {
        this.loading = false;
        this.catalogItems = items;
      });
  }
}
