import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsComponent } from './downloads.component';

const routes: Routes = [
	{ path: "downloads", component: DownloadsComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})

export class DownloadsRoutingModule { }
