import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalComponent } from './local.component';

const routes: Routes = [
	{ path: "local", component: LocalComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})

export class LocalRoutingModule { }
