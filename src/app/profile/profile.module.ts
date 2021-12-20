import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

import { PageTitleComponent } from '../page-title/page-title.component';
import { UserProfileCardComponent } from '../user-profile-card/user-profile-card.component';
import { StatisticComponent } from '../statistic/statistic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage , PageTitleComponent, UserProfileCardComponent, StatisticComponent]
})
export class ProfilePageModule {}
