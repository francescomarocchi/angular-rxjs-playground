import { Directive, Input } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { HostModel } from './host-model';
import { HOST_TOKEN } from './host.token';

@Directive({
  selector: '[appHostGreetStrategy]',
  providers: [{ provide: HOST_TOKEN, useExisting: HostGreetStrategyDirective }],
})
export class HostGreetStrategyDirective
  extends Observable<string>
  implements HostModel
{
  private subscriber?: Subscriber<string>;
  @Input() public name?: string;

  constructor() {
    super((subscriber) => {
      this.subscriber = subscriber;
    });
  }

  get computedMessage$(): Observable<string> {
    return this;
  }

  computeMessage(message: string): string {
    const computedMessage = `Hello, ${message}`;
    this.subscriber?.next(computedMessage);
    return computedMessage;
  }
}
