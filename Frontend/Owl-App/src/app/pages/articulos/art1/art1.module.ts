import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Art1PageRoutingModule } from './art1-routing.module';

import { Art1Page } from './art1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Art1PageRoutingModule
  ],
  declarations: [Art1Page]
})
export class Art1PageModule {}
