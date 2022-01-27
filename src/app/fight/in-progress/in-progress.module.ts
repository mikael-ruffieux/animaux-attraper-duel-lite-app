import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InProgressPageRoutingModule } from './in-progress-routing.module';

import { InProgressPage } from './in-progress.page';
import { CustomComponentsModule } from '@app/custom-components/custom-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InProgressPageRoutingModule,
    CustomComponentsModule
  ],
  declarations: [InProgressPage]
})
export class InProgressPageModule {}
