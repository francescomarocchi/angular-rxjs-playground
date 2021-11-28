import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChronoService extends Observable<Date> {
  private worker?: Worker;

  constructor() {
    super((subscriber) => {
      if (typeof Worker !== 'undefined') {
        // Create a new
        this.worker = new Worker(
          new URL('../../chrono.worker', import.meta.url)
        );
        this.worker.onmessage = ({ data }) => {
          subscriber.next(data);
        };
      } else {
        // Web workers are not supported in this environment.
        // You should add a fallback so that your program still executes correctly.
        throw new Error(`Hey, your browser don't support web workers!`);
      }
    });
  }

  public start(): void {
    this.worker?.postMessage('start');
  }

  public stop(): void {
    this.worker?.postMessage('stop');
  }

  public reset(): void {
    this.worker?.postMessage('reset');
  }
}
