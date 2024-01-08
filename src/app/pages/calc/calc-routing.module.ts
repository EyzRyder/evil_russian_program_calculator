import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcPage } from './calc.page';

const routes: Routes = [
  {
    path: '',
    component: CalcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcPageRoutingModule {}
