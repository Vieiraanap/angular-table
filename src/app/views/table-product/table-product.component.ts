import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IColumn, Column } from 'src/app/components/table/model/column.model';
import { Pagination } from 'src/app/components/table/model/pagination.model';
import { SearchEvent } from 'src/app/components/table/model/search-event';
import { TypeColumn } from 'src/app/components/table/model/type-column.enum';
import { IProduct } from 'src/app/model/product.model';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnInit {

  tableColumns: IColumn [] = [
    new Column('id', 'ID'),
    new Column('value', 'Valor', TypeColumn.Currency),
    new Column('expenses', 'Custo', TypeColumn.DecimalPercent),
    new Column('profit', 'Lucro', TypeColumn.Percent),
    new Column('expirationDate', 'Validade', TypeColumn.MonthYearDate),
  ];

  productList: IProduct [] = [];
  pageEvent: PageEvent;
  searchEvent: SearchEvent<IProduct>;
  configPage: PageEvent = Pagination.pageConfig();

  constructor(
    private tableService: TableDataService
  ) { }

  ngOnInit() {
    this.productList = this.tableService.getProduct();
    this.configPage.length = this.productList.length;
    this.configPage.pageSize = 1;
    this.configPage.pageIndex = 0;
  }

  getPaginationEvent(event: PageEvent) {
    console.log(event);
    this.pageEvent = event;
  }



  getSearchEvent(event: SearchEvent<IProduct>) {
    console.log(event);
    this.searchEvent = event;
  }
}
