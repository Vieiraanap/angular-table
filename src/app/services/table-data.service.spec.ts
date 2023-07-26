/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableDataService } from './table-data.service';

describe('Service: TableData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableDataService]
    });
  });

  it('should ...', inject([TableDataService], (service: TableDataService) => {
    expect(service).toBeTruthy();
  }));
});
