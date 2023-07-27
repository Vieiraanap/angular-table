import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableProductComponent } from './table-product.component';
import { TableModule } from 'src/app/components/table/table.module';
import { TableProductRoutingModule } from './table-product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    TableProductRoutingModule
  ],
  declarations: [TableProductComponent]
})
export class TableProductModule { }
