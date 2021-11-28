import { Component, Inject, Optional } from '@angular/core';
import { combineLatest, merge, Observable, Subject } from 'rxjs';
import { map, mapTo, startWith } from 'rxjs/operators';
import {
  LOADED,
  LOADING,
  PULL_PROVIDERS,
} from './pull-refresh/pull-to-refresh.providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PULL_PROVIDERS],
})
export class AppComponent {
  public readonly showLoader$: Observable<boolean>;
  constructor(
    @Inject(LOADING) loading$: Subject<void>,
    @Inject(LOADED) private readonly loaded$: Subject<void>
  ) {
    this.showLoader$ = merge(loading$.pipe(mapTo(true)), loaded$.pipe(mapTo(false))).pipe(startWith(false));
  }

  onTrigger() {
    setTimeout(() => {
      this.loaded$.next();
    }, 1000);
  }
}
