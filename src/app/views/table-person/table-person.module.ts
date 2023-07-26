import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePersonComponent } from './table-person.component';
import { TableModule } from 'src/app/components/table/table.module';
import { TablePersonRoutingModule } from './table-person-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    TablePersonRoutingModule
  ],
  declarations: [TablePersonComponent]
})
export class TablePersonModule { }
