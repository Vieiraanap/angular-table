import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IColumn } from './model/Column.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Pagination } from './model/Pagination.model';
import { CrudAction } from './model/CrudAction.enum';
import { CrudEvent } from './model/CrudEvent';
import { SearchEvent } from './model/SearchEvent';
import { MatSort } from '@angular/material/sort';
import { TypeColumn } from './model/TypeColumn.enum';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  // array com as colunas a serem exibidas
  @Input() columnDef: IColumn [] = [];

  // array com os dados a serem exibidos
  @Input() dataTable: any[] = [];

  // quando true paginação dos dados ocorre na API
  @Input() backendPagination? = false;

  // quando true pesquisa de dados ocorre na API
  @Input() backendSearch? = false;

  // sobrescreve a configuração padrão de páginas
  @Input() pageConfigDef?: PageEvent = new PageEvent;

  // sobrescreve a quantidade de itens por página
  @Input() newPageSize?: number[] = [];

  // do tipo any pois o tipo de dados é definido em tempo
  // de execução no componente pai
  dataSource!: MatTableDataSource<any>;

  // definição configuração padrão do tamanho de páginas
  pageConfig: PageEvent = Pagination.pageConfig();

  // definição da quantidade de itens por página
  pageSizeDefault: number[] = Pagination.pageSizeDefault;

  // exibe a barra de pesquisa
  @Input() showSearchBar?: boolean = false;

  // exibe o nome da coluna
  @Input() showColumnName?: boolean = true;

  // exibe o sort da coluna
  @Input() showMatSort?: boolean = true;

  // exibe o paginador
  @Input() showPaginator?: boolean = true;

  // exibe a coluna com ações crud
  @Input() showCrudActions?: boolean = false;

  // exibe botão para criar objeto
  @Input() showCreateButton?: boolean = false;

  // detalhes do objeto acessados via botão
  @Input() showRetrieveButton?: boolean = false;

  // detalhes do objeto acessados via clique na linha
  @Input() showRetrieveCell?: boolean = false;

  // exibe botão para atualizar objeto
  @Input() showUpdateButton?: boolean = false;

  // exibe botão para excluir objeto
  @Input() showDeleteButton?: boolean = false;

  // notifica o componente pai qual ação crud e objeto foram chamados
  @Output() crud: EventEmitter<CrudEvent<any>> = new EventEmitter();

  // notifica o componente pai se a página foi passada
  @Output() paginate: EventEmitter<PageEvent> = new EventEmitter();

  // notifica o componente pai de que uma busca está sendo feita na tabela
  @Output() search: EventEmitter<SearchEvent<any>> = new EventEmitter();

  @ViewChild(MatPaginator, { static: false }) matPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // definição da coluna de ações CRUD
    if (this.showCrudActions && !this.columnDef.some((c: IColumn) => c.typeColumn === TypeColumn.Crud)) {
      this.columnDef.push({columnName: 'acoes', columnValue: 'Ações', typeColumn: TypeColumn.Crud});
    }

    this.dataSource.data = this.dataTable || [];
    this.dataSource.sort = this.matSort;
    if (!this.backendPagination) {
      this.dataSource.paginator = this.matPaginator;
    }

    // torna o sorting da tabela case insensitive
    this.dataSource.sortingDataAccessor = (data: any, sortHeaderId) => {
      if (typeof data[sortHeaderId] === 'string') {
        return data[sortHeaderId].toLocaleLowerCase();
      }
      return data[sortHeaderId];
    }

    // substitui a quantidade de itens por página
    if (changes['newPageSize']) {
      this.pageSizeDefault = this.newPageSize;
    }

    // substitui a configuração padrão da página
    if (changes['pageConfigDef']) {
      this.pageConfig = this.pageConfigDef;
    }
  }

   // aplica a busca dentro da tabela
   applyFilter(event: any) {
    let value = event.target.value.trim().toLowerCase();

    if (this.backendSearch) {
      // emite o valor a ser buscado na API
      this.search.emit({searchValue: value});
    }

    if (this.backendPagination) {
      this.matPaginator.firstPage();
    } else {
      // filtra os dados diretamente na tabela
      this.dataSource.filter = value;
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }

  // aplica a paginação na tabela
  emitPageChange(pageEvent: PageEvent) {
    if (!pageEvent || !this.paginate) {
      return;
    }
    // emite tamanho e índice da página a ser buscada na API
    this.paginate.emit(pageEvent);
  }

  // emite a ação crud solicitada em um objeto
  emitCrudAction(crudAction: CrudAction, object: any): void {
    if (!this.crud) {
      return;
    }
    this.crud.emit({ crudAction, object });
  }

  get columnsName() {
    return this.columnDef.map((c: IColumn) => c.columnName);
  }

  get columnType() {
    return TypeColumn;
  }

  get crudAction() {
    return CrudAction;
  }
}
