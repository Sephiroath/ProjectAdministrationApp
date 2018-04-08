import { ActionReducer, Action } from '@ngrx/store';
import * as amount from './amount.actions';

export function AmountReducer(state: number = 1, action: amount.AmountChangeAction) {
    switch (action.type) {
        case amount.AMOUNTCHANGE:
            return action.payload;
        default:
            return state;
    }
}
