import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProfPage } from './nuevo-prof.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProfPageRoutingModule {}
