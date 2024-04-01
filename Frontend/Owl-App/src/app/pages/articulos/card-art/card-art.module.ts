import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardArtPageRoutingModule } from './card-art-routing.module';

import { CardArtPage } from './card-art.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardArtPageRoutingModule
  ],
  declarations: [CardArtPage]
})
export class CardArtPageModule {}
