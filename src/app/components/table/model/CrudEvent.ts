import { CrudAction } from "./CrudAction.enum";

export interface CrudEvent<T> {
  crudAction: CrudAction;
  object: T;
}
