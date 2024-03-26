import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Art2Page } from './art2.page';

const routes: Routes = [
  {
    path: '',
    component: Art2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Art2PageRoutingModule {}
