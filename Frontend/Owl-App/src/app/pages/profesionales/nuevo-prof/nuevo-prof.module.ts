import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProfPageRoutingModule } from './nuevo-prof-routing.module';

import { NuevoProfPage } from './nuevo-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NuevoProfPageRoutingModule
  ],
  declarations: [NuevoProfPage]
})
export class NuevoProfPageModule {}
