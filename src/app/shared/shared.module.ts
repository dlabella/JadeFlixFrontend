import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../core/core.module";
import { CatalogItemCardModule } from './catalog-item-card/catalog-item-card.module';
import { CatalogItemRemoteMediaModule } from './catalog-item-remote-media/catalog-item-remote-media.module';
import { CatalogItemLocalMediaModule } from './catalog-item-local-media/catalog-item-local-media.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    CatalogItemCardModule,
    CatalogItemRemoteMediaModule,
    CatalogItemLocalMediaModule
  ],
  exports: [
    CatalogItemCardModule,
    CatalogItemRemoteMediaModule,
    CatalogItemLocalMediaModule
  ],
  declarations: [
  ]
})
export class SharedModule { }
