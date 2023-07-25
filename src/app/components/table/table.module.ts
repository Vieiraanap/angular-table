import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginator } from 'src/app/components/table/utils/custom-paginator.config';


@NgModule({
  declarations: [TableComponent],
  imports: [
    MaterialModule,
    TableRoutingModule
  ],
  providers: [
    DatePipe,
    { provide: MatPaginatorIntl, useValue: CustomPaginator()}
  ]
})
export class TableModule { }
