import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerProfPageRoutingModule } from './ver-prof-routing.module';

import { VerProfPage } from './ver-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerProfPageRoutingModule
  ],
  declarations: [VerProfPage]
})
export class VerProfPageModule {}
