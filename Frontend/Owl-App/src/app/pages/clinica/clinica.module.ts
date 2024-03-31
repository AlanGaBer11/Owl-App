import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicaPageRoutingModule } from './clinica-routing.module';

import { ClinicaPage } from './clinica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClinicaPageRoutingModule
  ],
  declarations: [ClinicaPage]
})
export class ClinicaPageModule {}
