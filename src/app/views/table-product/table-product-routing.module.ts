import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableProductComponent } from './table-product.component';

const routes: Routes = [
  {
    path: '',
    component: TableProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableProductRoutingModule { }
