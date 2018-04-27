import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyconvertComponent } from '@app/currencyconvert/currencyconvert/currencyconvert.component';
import { CurrencyComponent } from '@app/currencyconvert/currency/currency.component';

const routes: Routes = [
  {
    path: '',
    component: CurrencyconvertComponent,
    children: [{
      path: '',
      redirectTo: 'currency',
      pathMatch: 'full'
    },
    {
      path: 'currency',
      component: CurrencyComponent,
      data: {
        title: 'Currency'
      }
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyconvertRoutingModule { }
