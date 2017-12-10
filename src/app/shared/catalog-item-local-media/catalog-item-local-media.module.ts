import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogItemLocalMediaComponent } from './catalog-item-local-media.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  exports:[
    CatalogItemLocalMediaComponent
  ],
  declarations: [CatalogItemLocalMediaComponent]
})
export class CatalogItemLocalMediaModule { }
