import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsPage } from './animals.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalsPage
  },
  {
    path: 'type',
    loadChildren: () => import('../Animals/type/type.module').then( m => m.TypePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsPageRoutingModule {}
