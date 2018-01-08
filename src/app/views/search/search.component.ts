import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoreModule } from '../../core/core.module'
import { CatalogItem } from '../../models/catalog-item';
import { CatalogService } from '../../services/catalog.service';
import { Router } from '@angular/router';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';
import { fadeInContent } from '@angular/material';
import { NotificationsService } from 'angular2-notifications';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  catalogItems: CatalogItem[];
  loading: boolean;
  constructor(
    private router: Router,
    private catalogService: CatalogService,
    private notifications: NotificationsService,
    private session: SessionService
  ) {

    this.loading = false;

  }

  ngOnInit() {
  }

  cardButtonClick(catalogItem: CatalogItem): void {
    this.session.set("selectedItem", catalogItem);
    this.router.navigate(['/catalog-item']);
  }

  runSearch(filter: string): void {
    this.catalogItems = null;
    this.loading = true;
    this.catalogService.findItem("AnimeFlv", filter)
      .catch(err => {
        this.catalogItems = [];
        this.loading = false;
        this.notifications.error("Api Call Error", err.message || err);
        return Promise.reject(err.message || err);
      })
      .subscribe(items => {
        this.loading = false;
        this.catalogItems = items;
      });
  }
}
