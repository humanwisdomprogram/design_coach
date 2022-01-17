import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachReviewPage } from './coach-review.page';

const routes: Routes = [
  {
    path: '',
    component: CoachReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachReviewPageRoutingModule {}
