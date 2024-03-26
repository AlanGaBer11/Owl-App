import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Art2PageRoutingModule } from './art2-routing.module';

import { Art2Page } from './art2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Art2PageRoutingModule
  ],
  declarations: [Art2Page]
})
export class Art2PageModule {}
