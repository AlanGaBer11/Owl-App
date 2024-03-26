import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Art5PageRoutingModule } from './art5-routing.module';

import { Art5Page } from './art5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Art5PageRoutingModule
  ],
  declarations: [Art5Page]
})
export class Art5PageModule {}
