import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Art3PageRoutingModule } from './art3-routing.module';

import { Art3Page } from './art3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Art3PageRoutingModule
  ],
  declarations: [Art3Page]
})
export class Art3PageModule {}
