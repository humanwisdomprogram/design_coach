import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachReviewPageRoutingModule } from './coach-review-routing.module';

import { CoachReviewPage } from './coach-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachReviewPageRoutingModule
  ],
  declarations: [CoachReviewPage]
})
export class CoachReviewPageModule {}
