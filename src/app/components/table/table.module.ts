import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TableComponent } from './table.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginator } from 'src/app/components/table/utils/custom-paginator.config';
import { TableCellComponent } from './table-cell/table-cell.component';
import { TableCrudColumnComponent } from './table-crud-column/table-crud-column.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'

@NgModule({
  declarations: [
    TableComponent,
    TableCellComponent,
    TableCrudColumnComponent
  ],
  imports: [
    MaterialModule,
    PipesModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [
    TableComponent
  ],
  providers: [
    DatePipe,
    provideNgxMask(),
    { provide: MatPaginatorIntl, useValue: CustomPaginator()}
  ]
})
export class TableModule { }
