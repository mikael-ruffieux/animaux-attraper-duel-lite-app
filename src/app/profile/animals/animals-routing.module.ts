import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsPage } from './animals.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalsPage
  },
  {
    path: 'id',
    loadChildren: () => import('../../Profile/Animals/id/id.module').then( m => m.IdPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsPageRoutingModule {}
