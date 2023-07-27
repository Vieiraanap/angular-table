import { IFirm } from './../../model/firm.model';
import { personData } from './person-data';

export const firmData: IFirm[] = [
  {
    id: 1,
    name: 'Empresa 1',
    cnpj: '99999999999999',
    owner: personData[0],
    email: 'contato@email.com.br'
  },
  {
    id: 2,
    name: 'Empresa 2',
    cnpj: '99999999999999',
    owner: personData[1],
    email: 'contato@email.com.br'
  },
  {
    id: 3,
    name: 'Empresa 3',
    cnpj: '99999999999999',
    owner: personData[2],
    email: 'contato@email.com.br'
  },
  {
    id: 4,
    name: 'Empresa 4',
    cnpj: '99999999999999',
    owner: personData[3],
    email: 'contato@email.com.br'
  },
  {
    id: 5,
    name: 'Empresa 5',
    cnpj: '99999999999999',
    owner: personData[4],
    email: 'contato@email.com.br'
  }
];
