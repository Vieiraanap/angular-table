import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFirmComponent } from './table-firm.component';
import { TableFirmRoutingModule } from './table-firm-routing.module';
import { TableModule } from 'src/app/components/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    TableFirmRoutingModule
  ],
  declarations: [TableFirmComponent]
})
export class TableFirmModule { }
