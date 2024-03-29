import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerClinicaPage } from './ver-clinica.page';

const routes: Routes = [
  {
    path: '',
    component: VerClinicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerClinicaPageRoutingModule {}
