import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoPacientePageRoutingModule } from './nuevo-paciente-routing.module';

import { NuevoPacientePage } from './nuevo-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    IonicModule,
    NuevoPacientePageRoutingModule
  ],
  declarations: [NuevoPacientePage]
})
export class NuevoPacientePageModule {}
