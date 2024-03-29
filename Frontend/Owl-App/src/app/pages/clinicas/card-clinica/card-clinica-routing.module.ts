import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardClinicaPage } from './card-clinica.page';

const routes: Routes = [
  {
    path: '',
    component: CardClinicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardClinicaPageRoutingModule {}
