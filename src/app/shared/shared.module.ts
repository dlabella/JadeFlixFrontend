import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../core/core.module";
import { CatalogItemCardModule } from './catalog-item-card/catalog-item-card.module';
import { CatalogItemRemoteMediaModule } from './catalog-item-remote-media/catalog-item-remote-media.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    CatalogItemCardModule,
    CatalogItemRemoteMediaModule
  ],
  exports: [
    CatalogItemCardModule,
    CatalogItemRemoteMediaModule
  ],
  declarations: [
  ]
})
export class SharedModule { }
