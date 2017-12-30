import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { DownloadsComponent } from './downloads.component';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [DownloadsComponent]
})
export class DownloadsModule { }
