import { Component, OnInit } from '@angular/core';
import { CatalogItem } from '../../models/catalog-item';
import { CatalogService } from '../../services/catalog.service';
import { LoggerService } from '../../services/logger.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	catalogItems: CatalogItem[];
	loading: boolean;

	constructor(
		private router: Router,
		private catalog: CatalogService,
		private log: LoggerService) {

		this.catalogItems = null;
		this.loading = true;
	}

	cardButtonClick(item: CatalogItem): void {
		this.router.navigate(['/catalog-item', item]);
	}

	ngOnInit(): void {
		this.log.Info("Requesting catalog recent");
		this.catalog.getRecent("AnimeFlv").subscribe(value => {
			this.loading = false;
			this.catalogItems = value;
		});
	}
}
