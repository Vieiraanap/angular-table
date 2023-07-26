import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePersonComponent } from './table-person.component';

const routes: Routes = [
  {
    path: '',
    component: TablePersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablePersonRoutingModule { }
