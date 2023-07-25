import { MatPaginatorIntl } from "@angular/material/paginator";

// sobrescreve os títulos do paginator
export function CustomPaginator() {
  const customPaginator = new MatPaginatorIntl();
  customPaginator.itemsPerPageLabel = 'Itens por página';
  customPaginator.firstPageLabel = 'Primeira página';
  customPaginator.lastPageLabel = 'Última página';
  customPaginator.nextPageLabel = 'Próximo';
  customPaginator.previousPageLabel = 'Anterior';

  return customPaginator;
}
