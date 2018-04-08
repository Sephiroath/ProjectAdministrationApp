import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CurrencyReducer } from './currency.reducer';
import { AmountReducer } from '../amount/amount.reducer';
import { CurrenciesUpdateAction, CurrenciesUpdatedAction } from './currency.actions';
import { AmountChangeAction } from '../amount/amount.actions';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor(public store: Store<any>) {}

  ngOnInit() {
  }

  onAmountChange(amount: string) {
    const number = parseFloat(amount);
    if (!isNaN(number)) {
      this.store.dispatch(new AmountChangeAction(number));
    }
  }

}
