import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerProfPage } from './ver-prof.page';

const routes: Routes = [
  {
    path: '',
    component: VerProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerProfPageRoutingModule {}
