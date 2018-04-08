import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CurrencyconvertRoutingModule } from './currencyconvert-routing.module';
import { CurrencyconvertComponent } from './currencyconvert/currencyconvert.component';
import { CurrencyComponent } from './currency/currency.component';
import { AmountComponent } from './amount/amount.component';
import { SharedModule } from '@app/shared';

import { CurrencyReducer } from './currency/currency.reducer';
import { AmountReducer } from './amount/amount.reducer';

@NgModule({
  imports: [
    SharedModule,
    CurrencyconvertRoutingModule,
    StoreModule.forFeature('currencyconvert', {
      currency: CurrencyReducer,
      amount: AmountReducer
    })
  ],
  declarations: [CurrencyconvertComponent, CurrencyComponent, AmountComponent]
})
export class CurrencyconvertModule { }
