import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdiPacientePageRoutingModule } from './edi-paciente-routing.module';

import { EdiPacientePage } from './edi-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdiPacientePageRoutingModule
  ],
  declarations: [EdiPacientePage]
})
export class EdiPacientePageModule {}
