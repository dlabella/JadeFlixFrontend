import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../core/core.module";
import { CatalogItemCardModule } from './catalog-item-card/catalog-item-card.module';
import { CatalogItemRemoteMediaModule } from './catalog-item-remote-media/catalog-item-remote-media.module';
import { CatalogItemLocalMediaModule } from './catalog-item-local-media/catalog-item-local-media.module';
import { DownloadCardModule } from './download-card/download-card.module';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';
import { SearchBoxModule } from './search-box/search-box.module';
import { FilterBoxModule } from './filter-box/filter-box.module';

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		CatalogItemCardModule,
		CatalogItemRemoteMediaModule,
		CatalogItemLocalMediaModule,
		LoadingSpinnerModule,
		DownloadCardModule,
		SearchBoxModule,
		FilterBoxModule
	],
	exports: [
		CatalogItemCardModule,
		CatalogItemRemoteMediaModule,
		CatalogItemLocalMediaModule,
		LoadingSpinnerModule,
		DownloadCardModule,
		SearchBoxModule,
		FilterBoxModule
	],
	declarations: [
	]
})
export class SharedModule { }
