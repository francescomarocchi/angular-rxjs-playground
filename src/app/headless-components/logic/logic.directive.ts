import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LogicModel {
  name: string | undefined;
}

@Directive({
  selector: '[appLogic]',
})
export class LogicDirective implements OnInit, OnDestroy {
  public model$$ = new BehaviorSubject<LogicModel>({} as LogicModel);

  @Input('appLogic') set name(value: string | undefined) {
    this.model$$.next({ name: value || 'EMPTY OR UNDEFINED' });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.warn('DESTROYING');
  }

  greet(value: string | undefined): void {
    this.name = value;
  }
}
