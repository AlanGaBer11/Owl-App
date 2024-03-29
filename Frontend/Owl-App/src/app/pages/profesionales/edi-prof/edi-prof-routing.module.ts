import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdiProfPage } from './edi-prof.page';

const routes: Routes = [
  {
    path: '',
    component: EdiProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdiProfPageRoutingModule {}
