import { Component, Input, OnInit } from '@angular/core';
import { TypeColumn } from '../model/TypeColumn.enum';
import { CrudAction } from '../model/CrudAction.enum';
import { Gender } from 'src/app/model/enum/gender.enum';

@Component({
  selector: 'table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent implements OnInit {

  // objeto que será exibido na tabela
  @Input() object: any;

  // nome da coluna que será exibida na tabela
  @Input() columnName: string;

  // tipo da coluna
  @Input() typeColumn: TypeColumn;

  constructor() { }

  ngOnInit(): void {
    this.showDataTable(this.object, this.columnName);
  }

  // permite a exibição de objetos simples e aninhados
  showDataTable(object: any, columnName: string): any {
    return columnName.split('.').reduce((previousValue, currentValue) => previousValue[currentValue], object);
  }

  get columnType() {
    return TypeColumn;
  }

  get crudAction() {
    return CrudAction;
  }

  get genderEnum() {
    return Gender;
  }
}
