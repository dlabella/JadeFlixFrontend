import { Component, Input, OnInit } from '@angular/core';
import { CatalogItem } from '../../models/catalog-item';

@Component({
  selector: 'catalog-item-remote-media',
  templateUrl: './catalog-item-remote-media.component.html',
  styleUrls: ['./catalog-item-remote-media.component.css']
})
export class CatalogItemRemoteMediaComponent implements OnInit {
  @Input() Item:CatalogItem;

  constructor() { }

  ngOnInit() {
  }

}
