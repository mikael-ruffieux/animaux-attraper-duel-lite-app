import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FightPage } from './fight.page';

const routes: Routes = [
  {
    path: '',
    component: FightPage
  },
  {
    path: 'searching',
    loadChildren: () => import('./searching/searching.module').then( m => m.SearchingPageModule)
  },
  {
    path: 'in-progress',
    loadChildren: () => import('./in-progress/in-progress.module').then( m => m.InProgressPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FightPageRoutingModule {}
