import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableFirmComponent } from './table-firm.component';

const routes: Routes = [
  {
    path: '',
    component: TableFirmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableFirmRoutingModule { }
