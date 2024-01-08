import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfgPage } from './confg.page';

const routes: Routes = [
  {
    path: '',
    component: ConfgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfgPageRoutingModule {}
