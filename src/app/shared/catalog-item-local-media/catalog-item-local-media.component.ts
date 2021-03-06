import { Component, Input, OnInit } from '@angular/core';
import { CatalogItem } from '../../models/catalog-item';
import { MediaSource } from '../../models/media-source';

@Component({
	selector: 'catalog-item-local-media',
	templateUrl: './catalog-item-local-media.component.html',
	styleUrls: ['./catalog-item-local-media.component.css']
})
export class CatalogItemLocalMediaComponent implements OnInit {
	@Input() catalogItem: CatalogItem;

	constructor() { }

	ngOnInit() {
	}


}
