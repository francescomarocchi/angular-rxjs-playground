import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LogicDirective } from './headless-components/logic/logic.directive';
import { LessSimpleComponent } from './headless-components/views/less-simple-view.component';
import { NotSoSimpleComponent } from './headless-components/views/not-so-simple-view.component';
import { SimpleViewComponent } from './headless-components/views/simple-view.component';
import { PinchModule } from './pinch/pinch.module';
import { PullToRefreshModule } from './pull-refresh/pull-to-refresh.module';
import { RippleModule } from './ripple/ripple.module';
import { HostBlameStrategyDirective } from './strategy-directives/host-blame-strategy.directive';
import { HostGreetStrategyDirective } from './strategy-directives/host-greet-strategy.directive';
import { AppStrategyHost } from './strategy-directives/strategy-host.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleViewComponent,
    LessSimpleComponent,
    NotSoSimpleComponent,
    LogicDirective,
    AppStrategyHost,
    HostGreetStrategyDirective,
    HostBlameStrategyDirective
  ],
  imports: [BrowserModule, RippleModule, PullToRefreshModule, PinchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
