import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	exports: [
		DashboardComponent
	],
	declarations: [
		DashboardComponent
	]
})
export class DashboardModule { }
