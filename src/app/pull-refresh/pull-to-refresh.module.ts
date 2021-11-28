import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PullToRefreshDirective } from './pull-to-refresh.directive';



@NgModule({
  declarations: [
    PullToRefreshDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PullToRefreshDirective
  ]
})
export class PullToRefreshModule { }
