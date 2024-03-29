import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerClinicaPageRoutingModule } from './ver-clinica-routing.module';

import { VerClinicaPage } from './ver-clinica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerClinicaPageRoutingModule
  ],
  declarations: [VerClinicaPage]
})
export class VerClinicaPageModule {}
