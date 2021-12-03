import { Directive, Input } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { HostModel } from './host-model';
import { HOST_TOKEN } from './host.token';

@Directive({
  selector: '[appHostBlameStrategy]',
  providers: [{ provide: HOST_TOKEN, useExisting: HostBlameStrategyDirective }],
})
export class HostBlameStrategyDirective
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
    const computedMessage = `Damn, ${message}`;
    this.subscriber?.next(computedMessage);
    return computedMessage;
  }
}
