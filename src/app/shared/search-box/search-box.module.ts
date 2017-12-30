import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  exports:[SearchBoxComponent],
  declarations: [SearchBoxComponent]
})
export class SearchBoxModule { }
