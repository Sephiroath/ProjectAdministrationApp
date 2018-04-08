import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'currencyconvert',
    pathMatch: 'full'
  },
  {
    path: 'currencyconvert',
    loadChildren: 'app/currencyconvert/currencyconvert.module#CurrencyconvertModule'
  },
  {
    path: 'projectadministration',
    loadChildren: 'app/projectadministration/projectadministration.module#ProjectadministrationModule'
  },
  {
    path: '**',
    redirectTo: 'currencyconvert'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
