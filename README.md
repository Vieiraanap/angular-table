# AngularTable

Tabela Genérica com Angular Material

# Recursos

* Operações Crud
* Paginação e Busca no backend
* Exibição de dados simples e aninhados
* Aplicação de máscara nos dados
* Pipe de enum
* Responsividade

# Uso

~~~html
<app-table
  [dataTable]="tableData"
  [columnDef]="tableColumns"
  [showSearchBar]="true"
  [showColumnName]="false"
  [showMatSort]="false"
  [showPaginator]="true"
  [showCrudActions]="true"
  [showCreateButton]="true"
  [showRetrieveButton]="true"
  [showRetrieveCell]="true"
  [showUpdateButton]="true"
  [showDeleteButton]="true"
  [backendSearch]="true"
  [backendPagination]="true"
  [pageConfigDef]="configPage"
  [newPageSize]="[1,3,5]"
  (crud)="getCrudEvent($event)"
  (search)="getSearchEvent($event)"
  (paginate)="getPaginationEvent($event)"
></app-table>
~~~

## Atributos - @Input()

### Obrigatórios

~~~html
<app-table
  [dataTable]="tableData"
  [columnDef]="tableColumns"
>
</app-table>
~~~

Nome      | Valor Padrão  | Tipo     | Objetivo
----------|---------------|----------|----------
dataTable | []            | any[]    |dados recebidos do componente pai
columnDef | []            | IColumn[]|definição das colunas no componente pai

### Opcionais

Nome                  | Valor Padrão| Tipo     | Objetivo
----------------------|-------------|----------|----------
backendPagination     | false       | boolean  |habilita paginação de dados no backend
backendSearch         | false       | boolean  |habilita pesquisa de dados no backend
pageConfigDef         |new PageEvent| PageEvent|sobrescreve a configuração padrão de páginas
newPageSize           | []          | number[] |sobrescreve a quantidade de itens por página
showSearchBar         | false       | boolean  |exibe a barra de pesquisa
showColumnName        | true        | boolean  |exibe o nome das colunas
showMatSort           | true        | boolean  |exibe o ordenador (sort) da coluna
showPaginator         | true        | boolean  |exibe o paginador (previous/next) da tabela
showCrudActions       | false       | boolean  |exibe a coluna de ações crud
showCreateButton      | false       | boolean  |exibe botão para criar objeto
showRetrieveButton    | false       | boolean  |detalhes do objeto acessados via botão
showRetrieveCell      | false       | boolean  |detalhes do objeto acessados via clique na linha
showUpdateButton      | false       | boolean  |exibe botão para atualizar objeto
showDeleteButton      | false       | boolean  |exibe botão para excluir objeto

## Eventos - @Output()

Nome    | Valor Padrão | Tipo                         | Objetivo
--------|--------------|------------------------------|----------
crud    |EventEmitter()|EventEmitter<CrudEvent<any>>  |emite qual ação crud e objeto foram solicitados
paginate|EventEmitter()| EventEmitter<PageEvent>      |emite tamanho e índice da página solicitada
search  |EventEmitter()|EventEmitter<SearchEvent<any>>|emite o valor a ser buscado no backend

# Exibição de Dados

A exibição dos dados é de competência do componente `<table-cell>`
Presente dentro do componente da tabela, que possui os seguintes atributos: 

Nome      | Valor Padrão | Tipo      | Objetivo
----------|--------------|-----------|----------
object    | undefined    | any       |valor a ser exibido dentro de cada célula da tabela
columnName| undefined    | string    |nome da coluna
typeColumn| undefined    | TypeColumn|tipo de dados que será exibido em cada coluna

O método `showDataTable()`
permite a extração do valor a ser exibido em caso de objetos aninhados.
Basta indicar na definição de colunas, dentro do componente pai, o caminho correto
até o valor:

#### Definição de colunas da tabela de empresas

Uma empresa possui um proprietário e o objetivo é mostrar o nome dele na tabela

~~~javascript
tableColumns: IColumn [] = [
  // outras colunas
  new Column('owner.name', 'Owner'),
];
~~~

#### Declaração dos tipos de Dados

`IFirm` é o tipo de dados de uma empresa, cujo proprietário (owner) é uma pessoa
definido por `IPerson`

~~~javascript
export interface IFirm {
  // outros atributos
  owner: IPerson;
}

export interface IPerson {
  // outros atributos
  name: string;
}
~~~

#### Exibição na tela
![exibição dado aninhado](images/coluna-owner.png)

## Definição do tipo de coluna - TypeColumn

O enum `TypeColumn` auxilia a utilização de máscaras dentro da tabela, para que
os dados possam ser exibidos de maneira agradável e compreensível.
Ele pode e deve ser modificado de acordo com a necessidade do projeto. Basta adicionar o valor
ao enum e determinar seu uso dentro do arquivo `table-cell.component.html`

~~~javascript
export enum TypeColumn {
  ShortDate = 'ShortDate',
  //outros valores
  Currency = 'Currency',
  Cpf = 'Cpf',
  // outros valores
}
~~~

No HTML a diretiva `ngSwitch` será responsável por controlar qual máscara o dado deve receber.
O valor padrão `ngSwitchDefault` serve para strings simples. Ex: nome de uma pessoa.

~~~html
<container-element [ngSwitch]="typeColumn">
  <!-- máscara para cpf -->
  <span *ngSwitchCase="columnType.Cpf">
    {{ showDataTable(object, columnName) | mask: '000.000.000-00' }}
  </span>

  <!-- máscara para valores monetários -->
  <span *ngSwitchCase="columnType.Currency">
    {{ showDataTable(object, columnName) | currency }}
  </span>

  <!-- máscara para datas -->
  <span *ngSwitchCase="columnType.ShortDate">
    {{ showDataTable(object, columnName) | date: 'shortDate' }}
  </span>

  <span *ngSwitchDefault class="text-capitalize">
    {{ showDataTable(object, columnName)?.toLocaleString().toLowerCase() }}
  </span>
</container-element>
~~~

#### Pipes

É importante que o locale seja modificado no `AppModule` do projeto para que os pipes de data e valor monetário exibam os valores de acordo com a localidade desejada. Vide `utils/providers.ts`.

#### Pipes Customizados
Para dados do tipo enum, há a possibilidade de formatá-lo com a ajuda de um pipe customizado.
Definimos o tipo da coluna no enum `TypeColumn` e criamos o enum do tipo do dado a ser exibido.
Ex: `Gender`.

~~~javascript
export enum TypeColumn {
  // outros valores
  Gender = 'Gender',
}

export enum Gender {
  F = 'Feminino',
  M = 'Masculino'
}
~~~

No componente `<table-cell>`:

~~~javascript
get genderEnum() {
  return Gender;
}
~~~

~~~html
  <!-- máscara para enum de sexo -->
  <span *ngSwitchCase="columnType.Gender">
    {{ showDataTable(object, columnName) | enum: genderEnum }}
  </span>
~~~

**O arquivo `pipes/enum.pipe.ts` declara pipe genérico que extrai valores de qualquer enum**

# Responsividade

Resposividade da tabela é de responsabilidade do arquivo `table.component.css`.
O atributo `content: attr(data-label)` utiliza o valor correspondente ao valor da coluna (columnValue), ou seja, o nome da coluna que é exibido no template, para exibi-lo ao lado dos dados.
Importante manter a referência `[attr.data-label]="column.columnValue"` a este atributo (content) no arquivo `table.component.html`.
