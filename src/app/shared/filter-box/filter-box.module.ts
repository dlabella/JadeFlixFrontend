import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBoxComponent } from './filter-box.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  exports:[FilterBoxComponent],
  declarations: [FilterBoxComponent]
})
export class FilterBoxModule { }
