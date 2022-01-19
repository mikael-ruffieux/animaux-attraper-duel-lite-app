import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Custom Components */
import { PageTitleComponent } from '../page-title/page-title.component';
import { CardListComponent } from '../card-list/card-list.component';
import { StatisticComponent } from '../statistic/statistic.component';
import { AnimalButtonComponent } from '../animal-button/animal-button.component';
import { AnimalTypeButtonComponent } from '../animal-type-button/animal-type-button.component';
/* .Custom Components */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageTitleComponent,
    CardListComponent,
    StatisticComponent,
    AnimalButtonComponent,
    AnimalTypeButtonComponent
  ],
  exports: [
    PageTitleComponent,
    CardListComponent,
    StatisticComponent,
    AnimalButtonComponent,
    AnimalTypeButtonComponent    
  ]
})
export class CustomComponentsModule { }