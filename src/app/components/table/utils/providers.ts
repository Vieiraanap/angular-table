import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';

//Locale para pipe de data
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

export const providers = [
  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  {
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  },
  {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  },
]
