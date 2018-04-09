import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CatalogItem } from '../../models/catalog-item';
import { CatalogService } from '../../services/catalog.service';
import { LoggerService } from '../../services/logger.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Observable';
import { SessionService } from '../../services/session.service';
import { LazyImageLoaderService } from '../../services/lazy-image-loader.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewChecked {

	catalogItems: CatalogItem[];
	loading: boolean;
  isCatalogLoaded : boolean;
  elementsCountBuff: number;

	constructor(
		private router: Router,
		private catalog: CatalogService,
		private log: LoggerService,
		private notifications: NotificationsService,
    private session: SessionService,
    private imageLoader: LazyImageLoaderService
	) {
		this.catalogItems = null;
    this.loading = true;
  }

  ngAfterViewChecked(): void {
    this.imageLoader.ProcessChanges();
  }

	cardButtonClick(catalogItem: CatalogItem): void {
    this.session.set("selectedItem", catalogItem)
    .subscribe(result => {
			this.router.navigate(['/catalog-item']);
		});
  };

	ngOnInit(): void {
		this.log.Info("Requesting catalog recent");
		this.catalog.getRecent("AnimeFlv").catch(err => {
			this.catalogItems = [];
			this.loading = false;
			this.notifications.error("Api Call Error", err.message || err);
			return Promise.reject(err.message || err);
		}).subscribe(value => {
			this.loading = false;
      this.catalogItems = value;
		});
  };
}
