import { ElementRef, InjectionToken, Provider } from '@angular/core';
import { EMPTY, fromEvent, merge, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import {
  endWith,
  filter,
  map,
  mapTo,
  scan,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

export const MICRO_OFFSET = 10 ** -6;
export const PULLED_DISTANCE = 50;
export const PULL = new InjectionToken<Observable<number>>('PULL');
export const LOADING = new InjectionToken<Observable<unknown>>('LOADING', {
  factory: () => EMPTY,
});
export const LOADED = new InjectionToken<Observable<unknown>>('LOADED', {
  factory: () => EMPTY,
});
export const PULL_PROVIDERS: Provider[] = [
  {
    provide: PULL,
    deps: [LOADED, ElementRef],
    useFactory: pullFactory,
  },
  { provide: LOADED, useValue: new Subject<void>() },
  { provide: LOADING, useValue: new Subject<void>() },
];

function pullFactory(
  /*isIOS: boolean = false,*/
  loaded$: Observable<unknown>,
  { nativeElement }: ElementRef<HTMLElement>
): Observable<number> {
  return merge(
    fromEvent<TouchEvent>(nativeElement, 'touchstart').pipe(
      filter(() => nativeElement.scrollTop === 0),
      switchMap((touchStart) =>
        fromEvent<TouchEvent>(nativeElement, 'touchmove').pipe(
          map(
            (touchMove) =>
              touchMove.touches[0].clientY - touchStart.touches[0].clientY
          ),
          takeUntil(fromEvent<TouchEvent>(nativeElement, 'touchend')),
          endWith(0)
        )
      )
    ),
    loaded$.pipe(mapTo(NaN))
  ).pipe(
    scan((max, current) => {
      if (isNaN(current)) {
        return 0;
      }

      const androidLoading = /*!isIOS &&*/ max === PULLED_DISTANCE;
      const dropped = current === 0 && max > PULLED_DISTANCE;

      return androidLoading || dropped
        ? PULLED_DISTANCE
        : current + MICRO_OFFSET;
    }, 0)
  );
}
