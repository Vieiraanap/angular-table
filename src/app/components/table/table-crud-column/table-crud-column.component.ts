import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudEvent } from '../model/CrudEvent';
import { CrudAction } from '../model/CrudAction.enum';

@Component({
  selector: 'crud-column',
  templateUrl: './table-crud-column.component.html',
  styleUrls: ['./table-crud-column.component.css']
})
export class TableCrudColumnComponent implements OnInit {

  // objeto que será exibido na tabela
  @Input() object: any;

  // ações crud a serem exibidas na tabela
  @Input() showRetrieve?: boolean = false;
  @Input() showUpdate?: boolean = false;
  @Input() showDelete?: boolean = false;

  // notifica o componente pai qual operação crud e objeto foram chamados
  @Output() readonly crud: EventEmitter<CrudEvent<any>> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // notifica que uma operação crud foi solicitada em um objeto
  emitCrudAction(crudAction: CrudAction, object: any): void {
    if (!this.crud) {
      return;
    }
    this.crud.emit({ crudAction, object });
  }

  get crudAction() {
    return CrudAction;
  }
}
