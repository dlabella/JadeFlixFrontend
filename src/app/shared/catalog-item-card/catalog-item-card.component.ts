import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CatalogItem } from '../../models/catalog-item';

@Component({
	selector: 'catalog-item-card',
	templateUrl: './catalog-item-card.component.html',
	styleUrls: ['./catalog-item-card.component.css']
})
export class CatalogItemCardComponent {

	@Input() catalogItem: CatalogItem;
	@Output() buttonClick = new EventEmitter<CatalogItem>();

	onButtonClick(event: any): void {
		console.log("Episode button clicked");
		this.buttonClick.emit(this.catalogItem);
	}
}
