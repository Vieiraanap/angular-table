import { IPerson } from './person.model';

export interface IFirm {
  id: number;
  name: string;
  email: string;
  cnpj: string;
  owner: IPerson;
}
