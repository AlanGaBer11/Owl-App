import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdiClinicaPageRoutingModule } from './edi-clinica-routing.module';

import { EdiClinicaPage } from './edi-clinica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EdiClinicaPageRoutingModule
  ],
  declarations: [EdiClinicaPage]
})
export class EdiClinicaPageModule {}
