import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalsPageRoutingModule } from './animals-routing.module';

import { AnimalsPage } from './animals.page';
import { CustomComponentsModule } from '@app/custom-components/custom-components.module';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalsPageRoutingModule,
    CustomComponentsModule
  ],
  declarations: [AnimalsPage]
})
export class AnimalsPageModule {}
