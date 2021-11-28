import { Component, Inject } from '@angular/core';
import { LogicDirective } from '../logic/logic.directive';

@Component({
  selector: 'app-simple-view',
  template: `<h1>{{ (logic.model$$ | async)?.name }}</h1>
    <button type="submit" (click)="logic.greet('Hubaldus')">SUBMIT</button>`,
})
export class SimpleViewComponent {
  constructor(@Inject(LogicDirective) readonly logic: LogicDirective) {}
}
