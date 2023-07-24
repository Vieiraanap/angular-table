import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    title: 'Tabela Genérica'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
