import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';

import { PageTitleComponent } from '../page-title/page-title.component';
import { CardListComponent } from '../card-list/card-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule
  ],
  declarations: [UsersPage , PageTitleComponent, CardListComponent]
 
})
export class UsersPageModule {}
