import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogicDirective } from './headless-components/logic/logic.directive';
import { LessSimpleComponent } from './headless-components/views/less-simple-view.component';
import { NotSoSimpleComponent } from './headless-components/views/not-so-simple-view.component';
import { SimpleViewComponent } from './headless-components/views/simple-view.component';
import { RippleModule } from './ripple/ripple.module';
import { PullToRefreshModule } from './pull-refresh/pull-to-refresh.module';

@NgModule({
  declarations: [
    AppComponent,
    SimpleViewComponent,
    LessSimpleComponent,
    NotSoSimpleComponent,
    LogicDirective,
  ],
  imports: [BrowserModule, RippleModule, PullToRefreshModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
