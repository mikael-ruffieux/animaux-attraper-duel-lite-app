import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapturePageRoutingModule } from './capture-routing.module';

import { CapturePage } from './capture.page';

import { CustomComponentsModule } from '@app/custom-components/custom-components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapturePageRoutingModule,
    CustomComponentsModule
  ],
  declarations: [CapturePage]
})
export class CapturePageModule {}
