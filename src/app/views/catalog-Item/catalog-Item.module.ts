import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { CatalogItemComponent } from './catalog-item.component';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    SharedModule
  ],
  exports:[
    CatalogItemComponent
  ],
  declarations: [
    CatalogItemComponent
  ]
})
export class CatalogItemModule { }
