import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerPacientePage } from './ver-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: VerPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerPacientePageRoutingModule {}
