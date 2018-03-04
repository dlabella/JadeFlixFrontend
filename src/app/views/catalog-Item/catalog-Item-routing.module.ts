import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogItemComponent } from './catalog-item.component';

const routes: Routes = [
{ path: 'catalog-item', component: CatalogItemComponent }
];

@NgModule({
imports: [
  RouterModule.forChild(routes)
],
exports: [RouterModule]
})

export class CatalogItemRoutingModule { }
