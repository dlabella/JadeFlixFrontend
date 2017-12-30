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
		this.buttonClick.emit(this.catalogItem);
	}
	
	getButtonText(){
		if (this.catalogItem.properties && this.catalogItem.properties["LastEpisode"]){
			return "Episode "+this.catalogItem.properties["LastEpisode"];
		}
		return "View";
	}
}
