import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogItemRemoteMediaComponent } from './catalog-item-remote-media.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  exports:[
    CatalogItemRemoteMediaComponent
  ],
  declarations: [CatalogItemRemoteMediaComponent]
})
export class CatalogItemRemoteMediaModule { }
