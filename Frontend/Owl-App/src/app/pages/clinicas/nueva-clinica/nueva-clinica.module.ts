import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaClinicaPageRoutingModule } from './nueva-clinica-routing.module';

import { NuevaClinicaPage } from './nueva-clinica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NuevaClinicaPageRoutingModule
  ],
  declarations: [NuevaClinicaPage]
})
export class NuevaClinicaPageModule {}
