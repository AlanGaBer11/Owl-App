import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaClinicaPage } from './nueva-clinica.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaClinicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaClinicaPageRoutingModule {}
