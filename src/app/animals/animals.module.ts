import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalsPageRoutingModule } from './animals-routing.module';

import { AnimalsPage } from './animals.page';

import { PageTitleComponent } from '@app/page-title/page-title.component';
import { AnimalTypeButtonComponent } from '@app/animal-type-button/animal-type-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalsPageRoutingModule
  ],
  declarations: [AnimalsPage, AnimalTypeButtonComponent, PageTitleComponent]
})
export class AnimalsPageModule {}
