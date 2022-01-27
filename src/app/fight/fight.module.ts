import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FightPageRoutingModule } from './fight-routing.module';

import { FightPage } from './fight.page';
import { CustomComponentsModule } from '@app/custom-components/custom-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FightPageRoutingModule,
    CustomComponentsModule
  ],
  declarations: [FightPage]
})
export class FightPageModule {}
