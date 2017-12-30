import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ViewsModule } from './views/views.module';
import { CatalogService } from './services/catalog.service';
import { LoggerService } from './services/logger.service';
import { DownloadService } from './services/download.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		CoreModule,
		ViewsModule,
		BrowserAnimationsModule, 
        SimpleNotificationsModule.forRoot()
	],
	providers: [
		HttpClientModule,
		CatalogService,
		LoggerService,
		DownloadService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
