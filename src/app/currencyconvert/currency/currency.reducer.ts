import { Currency } from './../models/currency';
import * as currency from './currency.actions';

export function CurrencyReducer(state = [], action: currency.CurrenciesUpdatedAction) {
    switch (action.type) {
        case currency.CURRENCIESUPDATED:
            return action.payload;
        default:
            return state;
    }
}
