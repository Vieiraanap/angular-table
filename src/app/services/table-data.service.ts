import { Injectable } from '@angular/core';
import { personData } from './table-data/person-data';
import { IPerson } from '../model/person.model';
import { IFirm } from '../model/firm.model';
import { firmData } from './table-data/firm-data';
import { IProduct } from '../model/product.model';
import { productData } from './table-data/product-data';

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

  getProduct(): IProduct[] {
    return productData;
  }
}
