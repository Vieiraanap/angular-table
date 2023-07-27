import { Component, OnInit } from '@angular/core';
import { Column, IColumn } from 'src/app/components/table/model/column.model';
import { CrudEvent } from 'src/app/components/table/model/crud-event';
import { TypeColumn } from 'src/app/components/table/model/type-column.enum';
import { IPerson } from 'src/app/model/person.model';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'table-person',
  templateUrl: './table-person.component.html',
  styleUrls: ['./table-person.component.css']
})
export class TablePersonComponent implements OnInit {

  tableColumns: IColumn [] = [
    new Column('name', 'Nome'),
    new Column('sexo', 'Sexo', TypeColumn.Gender),
    new Column('cpf', 'CPF', TypeColumn.Cpf),
    new Column('phone', 'Telefone', TypeColumn.Phone),
    new Column('birthDate', 'Nascimento', TypeColumn.ShortDate),
  ];

  personList: IPerson [] = [];
  crudEvent: CrudEvent<IPerson>;

  constructor(
    private tableService: TableDataService
  ) { }

  ngOnInit() {
    this.personList = this.tableService.getPerson();
  }

  getCrudEvent(event: CrudEvent<IPerson>) {
    console.log(event);
    this.crudEvent = event;
  }
}
