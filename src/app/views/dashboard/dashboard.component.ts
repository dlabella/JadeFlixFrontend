import { Component, OnInit } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CatalogItem } from '../../models/catalog-item';
import { CatalogService } from '../../services/catalog.service';
import { LoggerService } from '../../services/logger.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Observable';
import { SessionService } from '../../services/session.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	catalogItems: CatalogItem[];
	loading: boolean;
	notificationService: NotificationsService;

	constructor(
		private router: Router,
		private catalog: CatalogService,
		private log: LoggerService,
		private notifications: NotificationsService,
		private session: SessionService
	) {
		this.catalogItems = null;
		this.loading = true;
	}

	cardButtonClick(catalogItem: CatalogItem): void {
    this.session.set("selectedItem", catalogItem)
    .subscribe(result => {
			this.router.navigate(['/catalog-item']);
		});
	}

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
	}
}
