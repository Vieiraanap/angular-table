import { Injectable } from '@angular/core';
import { personData } from './table-data/person-data';
import { IPerson } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor() { }

  getPerson(): IPerson[] {
    return personData;
  }

}
