import { TypeColumn } from './TypeColumn.enum';

export interface IColumn {
  columnName: string;
  columnValue: string;
  typeColumn?: TypeColumn;
}

export class Column implements IColumn {
  columnName: string;
  columnValue: string;
  typeColumn?: TypeColumn;

  constructor(columnName: string, columnValue: string, typeColumn?: TypeColumn) {
    this.columnName = columnName;
    this.columnValue = columnValue;

    if (typeColumn) {
      this.typeColumn = typeColumn;
    }
  }
}
