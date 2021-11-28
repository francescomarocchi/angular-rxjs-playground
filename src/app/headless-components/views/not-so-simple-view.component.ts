import { Component } from '@angular/core';
import { LogicDirective } from '../logic/logic.directive';

@Component({
  selector: 'app-not-so-simple-view',
  template: `
    <h1>{{ (logic.model$$ | async)?.name }}</h1>
    <input
      type="text"
      [value]="(logic.model$$ | async)?.name"
      (input)="onInput($event)"
    />
  `,
})
export class NotSoSimpleComponent {
  constructor(readonly logic: LogicDirective) {}

  onInput(event: Event): void {
    this.logic.name = (event.target as HTMLInputElement).value;
  }
}
