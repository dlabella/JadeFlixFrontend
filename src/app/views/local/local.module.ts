import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalComponent } from './local.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  declarations: [LocalComponent]
})
export class LocalModule { }
