import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesionalPageRoutingModule } from './profesional-routing.module';

import { ProfesionalPage } from './profesional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfesionalPageRoutingModule
  ],
  declarations: [ProfesionalPage]
})
export class ProfesionalPageModule {}
