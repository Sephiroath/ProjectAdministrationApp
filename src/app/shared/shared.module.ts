import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatSidenavModule
  ],
  declarations: [],
  exports: [
    MatSidenavModule
  ]
})
export class SharedModule { }
