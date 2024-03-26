import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Art4PageRoutingModule } from './art4-routing.module';

import { Art4Page } from './art4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Art4PageRoutingModule
  ],
  declarations: [Art4Page]
})
export class Art4PageModule {}
