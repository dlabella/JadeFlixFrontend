import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { CoreModule } from '../../core/core.module'
import { CatalogItem } from '../../models/catalog-item';
import { Router } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { LoggerService } from '../../services/logger.service';
import { NotificationsService } from 'angular2-notifications';
import { SessionService } from '../../services/session.service';
import { EventEmitter } from '@angular/core';
import { LazyImageLoaderService } from '../../services/lazy-image-loader.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit, AfterViewChecked {
  catalogItems: CatalogItem[];
	loading: boolean;
  elementsCountBuff: number;

	constructor(
		private router: Router,
		private catalog: CatalogService,
		private log: LoggerService,
		private notifications:NotificationsService,
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
    .subscribe(response =>{
			this.router.navigate(['/catalog-item']);
		});
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
