import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { PinchDirective } from './pinch.directive';

@NgModule({
  declarations: [PinchDirective],
  imports: [CommonModule, HammerModule],
  exports: [PinchDirective],
})
export class PinchModule {}
