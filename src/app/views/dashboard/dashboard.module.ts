import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from '../../core/core.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		SharedModule,
		SimpleNotificationsModule
	],
	exports: [
		DashboardComponent
	],
	declarations: [
		DashboardComponent
	]
})
export class DashboardModule { }
