import { CrudAction } from "./crud-action.enum";

export interface CrudEvent<T> {
  crudAction: CrudAction;
  object: T;
}
