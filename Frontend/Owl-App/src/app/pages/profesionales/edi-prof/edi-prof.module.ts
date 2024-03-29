import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdiProfPageRoutingModule } from './edi-prof-routing.module';

import { EdiProfPage } from './edi-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdiProfPageRoutingModule
  ],
  declarations: [EdiProfPage]
})
export class EdiProfPageModule {}
