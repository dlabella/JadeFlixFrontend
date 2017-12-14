import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CatalogItemModule } from './catalog-Item/catalog-Item.module';
import { CatalogService } from '../services/catalog.service';
import { DashboardRoutingModule } from '../views/dashboard/dashboard-routing.module';
import { CatalogItemRoutingModule } from '../views/catalog-Item/catalog-Item-routing.module';

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		DashboardModule,
		CatalogItemModule,
		DashboardRoutingModule,
		CatalogItemRoutingModule
	],
	exports: [
		DashboardModule,
		CatalogItemModule,
		DashboardRoutingModule,
		CatalogItemRoutingModule
	],
	providers: [
		CatalogService
	],
	declarations: [

	]
})
export class ViewsModule { }
