import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Art3Page } from './art3.page';

const routes: Routes = [
  {
    path: '',
    component: Art3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Art3PageRoutingModule {}
