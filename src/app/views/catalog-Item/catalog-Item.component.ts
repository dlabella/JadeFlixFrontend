import { Component, Input, OnInit } from '@angular/core';
import { CatalogItem } from '../../models/catalog-item';
import { CatalogService } from '../../services/catalog.service';
import { LoggerService } from '../../services/logger.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Params } from '@angular/router';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  Item:CatalogItem;
  constructor(
    private route:ActivatedRoute,
    private catalogService:CatalogService
  ){ 
    
  }

  ngOnInit(): void {
    this.route.params
    .switchMap((params: CatalogItem) => 
           this.catalogService.getItem(params.ScrapedBy,params.KindName,params.GroupName,params.NId,params.UId))
    .subscribe((item:CatalogItem) => {
      this.Item = item;
    });
  }
 
 
}
