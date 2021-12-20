import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalsPageRoutingModule } from './animals-routing.module';

import { AnimalsPage } from './animals.page';

import { PageTitleComponent } from '../page-title/page-title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalsPageRoutingModule
  ],
  declarations: [AnimalsPage, PageTitleComponent]
})
export class AnimalsPageModule {}
