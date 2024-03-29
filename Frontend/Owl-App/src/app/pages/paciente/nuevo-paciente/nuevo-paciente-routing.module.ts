import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoPacientePage } from './nuevo-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPacientePageRoutingModule {}
