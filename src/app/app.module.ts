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

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		CoreModule,
		ViewsModule
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
