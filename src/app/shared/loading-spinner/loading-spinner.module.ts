import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  exports:[LoadingSpinnerComponent],
  declarations: [LoadingSpinnerComponent]
})
export class LoadingSpinnerModule { }
