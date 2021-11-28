import {
  Directive,
  ElementRef,
  Inject,
  OnDestroy,
  Output,
} from '@angular/core';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  LOADED,
  LOADING,
  PULL,
  PULLED_DISTANCE,
} from './pull-to-refresh.providers';

@Directive({
  selector: '[appPullToRefresh]',
})
export class PullToRefreshDirective implements OnDestroy {
  private readonly subscriptions = new Subscription();

  @Output('appPullToRefresh') appPullToRefresh = this.loading$;

  constructor(
    @Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>,
    @Inject(PULL) pull$: Observable<number>,
    @Inject(LOADED) loaded$: Subject<void>,
    @Inject(LOADING) private readonly loading$: Subject<void>
  ) {
    this.subscriptions.add(
      pull$.subscribe((pull) => {
        nativeElement.style.transform = `translateY(${pull}px)`;

        if (pull === PULLED_DISTANCE) {
          this.loading$.next();
        }
      })
    );

    this.subscriptions.add(
      loaded$.pipe(delay(300)).subscribe(() => {
        nativeElement.classList.remove('dropped');
      })
    );

    this.subscriptions.add(
      fromEvent(nativeElement, 'touchend').subscribe(() => {
        nativeElement.classList.add('dropped');
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
