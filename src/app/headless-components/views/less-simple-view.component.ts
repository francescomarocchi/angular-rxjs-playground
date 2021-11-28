import { Component } from '@angular/core';
import { LogicDirective } from '../logic/logic.directive';

@Component({
  selector: 'app-less-simple-view',
  template: `
    <h1>{{ (logic.model$$ | async)?.name }}</h1>
    <button type="submit" (click)="logic.greet('Hubaldus')">SUBMIT</button>
    <button type="submit" (click)="logic.greet(undefined)">CANCEL</button>
  `,
})
export class LessSimpleComponent {
  constructor(readonly logic: LogicDirective) {}
}
