import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Custom Components */
import { PageTitleComponent } from '../page-title/page-title.component';
import { CardListComponent } from '../card-list/card-list.component';
import { StatisticComponent } from '../statistic/statistic.component';
import { AnimalButtonComponent } from '../animal-button/animal-button.component';
import { AnimalTypeButtonComponent } from '../animal-type-button/animal-type-button.component';
import { RouterModule } from '@angular/router';
import { UserProfileCardComponent } from '@app/user-profile-card/user-profile-card.component';
/* .Custom Components */

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PageTitleComponent,
    CardListComponent,
    StatisticComponent,
    AnimalButtonComponent,
    AnimalTypeButtonComponent,
    UserProfileCardComponent
  ],
  exports: [
    PageTitleComponent,
    CardListComponent,
    StatisticComponent,
    AnimalButtonComponent,
    AnimalTypeButtonComponent,
    UserProfileCardComponent 
  ]
})
export class CustomComponentsModule { }
