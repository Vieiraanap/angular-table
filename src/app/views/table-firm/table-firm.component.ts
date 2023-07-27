import { Component, OnInit } from '@angular/core';
import { IColumn, Column } from 'src/app/components/table/model/column.model';
import { CrudEvent } from 'src/app/components/table/model/crud-event';
import { TypeColumn } from 'src/app/components/table/model/type-column.enum';
import { IFirm } from 'src/app/model/firm.model';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-table-firm',
  templateUrl: './table-firm.component.html',
  styleUrls: ['./table-firm.component.css']
})
export class TableFirmComponent implements OnInit {

  tableColumns: IColumn [] = [
    new Column('name', 'Nome'),
    new Column('cnpj', 'CNPJ', TypeColumn.Cnpj),
    new Column('email', 'E-mail'),
    new Column('owner.name', 'Owner'),
  ];

  firmList: IFirm [] = [];
  crudEvent: CrudEvent<IFirm>;

  constructor(
    private tableService: TableDataService
  ) { }

  ngOnInit() {
    this.firmList = this.tableService.getFirm();
  }

  getCrudEvent(event: CrudEvent<IFirm>) {
    console.log(event);
    this.crudEvent = event;
  }

}
