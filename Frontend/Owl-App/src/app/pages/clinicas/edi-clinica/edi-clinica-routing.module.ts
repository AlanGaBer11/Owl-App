import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdiClinicaPage } from './edi-clinica.page';

const routes: Routes = [
  {
    path: '',
    component: EdiClinicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdiClinicaPageRoutingModule {}
