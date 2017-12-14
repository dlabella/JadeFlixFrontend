import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogItemCardComponent } from '../catalog-item-card/catalog-item-card.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
	imports: [
		CommonModule,
		CoreModule
	],
	exports: [
		CatalogItemCardComponent
	],
	declarations: [
		CatalogItemCardComponent
	]
})
export class CatalogItemCardModule { }
