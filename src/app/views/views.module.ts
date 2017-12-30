import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CatalogItemModule } from './catalog-Item/catalog-Item.module';
import { DownloadsModule } from '../views/downloads/downloads.module';
import { LocalModule } from '../views/local/local.module';
import { SearchModule } from '../views/search/search.module';
import { CatalogService } from '../services/catalog.service';

import { DashboardRoutingModule } from '../views/dashboard/dashboard-routing.module';
import { CatalogItemRoutingModule } from '../views/catalog-Item/catalog-Item-routing.module';
import { DownloadsRoutingModule } from '../views/downloads/downloads-routing.module'
import { LocalRoutingModule } from '../views/local/local-routing.module';
import { SearchRoutingModule } from '../views/search/search-routing.module';
@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		DashboardModule,
		CatalogItemModule,
		DownloadsModule,
		LocalModule,
		SearchModule,
		DashboardRoutingModule,
		CatalogItemRoutingModule,
		DownloadsRoutingModule,
		LocalRoutingModule,
		SearchRoutingModule
	],
	exports: [
		DashboardModule,
		CatalogItemModule,
		DownloadsModule,
		LocalModule,
		SearchModule,
		DashboardRoutingModule,
		CatalogItemRoutingModule,
		DownloadsRoutingModule,
		LocalRoutingModule,
		SearchRoutingModule
	],
	providers: [
		CatalogService
	],
	declarations: [

	]
})
export class ViewsModule { }
