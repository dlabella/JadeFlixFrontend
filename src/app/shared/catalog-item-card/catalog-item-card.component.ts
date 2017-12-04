import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CatalogItem } from '../../models/catalog-item';

@Component({
  selector: 'catalog-item-card',
  templateUrl: './catalog-item-card.component.html',
  styleUrls: ['./catalog-item-card.component.css']
})
export class CatalogItemCardComponent {
  @Input() Item:CatalogItem;
  @Output() ButtonClick = new EventEmitter<CatalogItem>();
  
  OnButtonClick(event:any):void {
    console.log("Episode button clicked");
    this.ButtonClick.emit(this.Item);
  }
}
