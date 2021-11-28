import { Directive, Inject } from '@angular/core';
import { HammerLoader, HAMMER_LOADER } from '@angular/platform-browser';

@Directive({
  selector: '[appPinch]',
})
export class PinchDirective {
  // constructor(@Inject(HAMMER_LOADER) hammer: HammerLoader) {
  //   console.warn(hammer);
  // }
}
