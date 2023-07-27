import { Injectable } from '@angular/core';
import { personData } from './table-data/person-data';
import { IPerson } from '../model/person.model';
import { IFirm } from '../model/firm.model';
import { firmData } from './table-data/firm-data';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor() { }

  getPerson(): IPerson[] {
    return personData;
  }

  getFirm(): IFirm[] {
    return firmData;
  }

}
