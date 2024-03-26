import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Art4Page } from './art4.page';

const routes: Routes = [
  {
    path: '',
    component: Art4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Art4PageRoutingModule {}
