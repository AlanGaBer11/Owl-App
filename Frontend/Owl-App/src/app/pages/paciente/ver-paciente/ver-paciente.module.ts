import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPacientePageRoutingModule } from './ver-paciente-routing.module';

import { VerPacientePage } from './ver-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPacientePageRoutingModule
  ],
  declarations: [VerPacientePage]
})
export class VerPacientePageModule {}
