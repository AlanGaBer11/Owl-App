import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Art1Page } from './art1.page';

const routes: Routes = [
  {
    path: '',
    component: Art1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Art1PageRoutingModule {}
