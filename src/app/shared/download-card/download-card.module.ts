import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadCardComponent } from './download-card.component';
import { CoreModule } from '../../core/core.module';
@NgModule({
  imports: [
    CoreModule,
    CommonModule
  ],
  exports: [DownloadCardComponent],
  declarations: [DownloadCardComponent]
})
export class DownloadCardModule { }
