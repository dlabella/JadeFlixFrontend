import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
