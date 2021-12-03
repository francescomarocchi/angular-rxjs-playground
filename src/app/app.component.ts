import { Component, Inject } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { mapTo, startWith } from 'rxjs/operators';
import {
  LOADED,
  LOADING,
  LOADING_PROVIDERS,
} from './pull-refresh/pull-to-refresh.providers';
import { ChronoService } from './services/chrono.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LOADING_PROVIDERS],
})
export class AppComponent {
  public readonly showLoader$: Observable<boolean>;

  constructor(
    readonly chronoService: ChronoService,
    @Inject(LOADING) loading$: Subject<void>,
    @Inject(LOADED) private readonly loaded$: Subject<void>
  ) {
    this.showLoader$ = merge(
      loading$.pipe(mapTo(true)),
      loaded$.pipe(mapTo(false))
    ).pipe(startWith(false));
  }

  onTrigger() {
    setTimeout(() => {
      this.loaded$.next();
    }, 1000);
  }

  startChrono() {
    this.chronoService.start();
  }

  stopChrono() {
    this.chronoService.stop();
  }

  resetChrono() {
    this.chronoService.reset();
  }
}
