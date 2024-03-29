import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdiClinicaPageRoutingModule } from './edi-clinica-routing.module';

import { EdiClinicaPage } from './edi-clinica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdiClinicaPageRoutingModule
  ],
  declarations: [EdiClinicaPage]
})
export class EdiClinicaPageModule {}
