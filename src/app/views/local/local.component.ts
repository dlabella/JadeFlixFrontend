import { Component, OnInit } from '@angular/core';
import { CatalogItem } from '../../models/catalog-item';
import { Router } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { LoggerService } from '../../services/logger.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  catalogItems: CatalogItem[];
	loading: boolean;

	constructor(
		private router: Router,
		private catalog: CatalogService,
		private log: LoggerService,
		private notifications:NotificationsService) {

		this.catalogItems = null;
		this.loading = true;
	}

	cardButtonClick(catalogItem: CatalogItem): void {
		this.router.navigate(['/catalog-item', catalogItem]);
	}

	ngOnInit(): void {
		this.log.Info("Requesting catalog recent");
		this.catalog.getLocal("Anime","TvShow")
		.catch(err=>{
			this.catalogItems=[];
			this.loading = false;
			this.notifications.error("Api Call Error", err.message||err);
			return Promise.reject(err.message||err);
		})
		.subscribe(value => {
			this.loading = false;
			this.catalogItems = value;
		});
	}
}
