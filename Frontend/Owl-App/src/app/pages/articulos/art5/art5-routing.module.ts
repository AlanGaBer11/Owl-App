import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Art5Page } from './art5.page';

const routes: Routes = [
  {
    path: '',
    component: Art5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Art5PageRoutingModule {}
