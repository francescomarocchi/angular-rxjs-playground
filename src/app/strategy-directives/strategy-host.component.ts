import { Component, Host, Inject, Input, Self } from "@angular/core";
import { HostModel } from "./host-model";
import { HOST_TOKEN } from "./host.token";

@Component({
  selector: "app-strategy-host",
  template: `<h1>[STRATEGY]: {{ hostModel.computedMessage$ | async }}</h1>`
})
export class AppStrategyHost {

  constructor(@Inject(HOST_TOKEN) public readonly hostModel: HostModel) {
    setTimeout(() => {
      console.log(hostModel);
      hostModel.computeMessage('John Kennedy');
    });
  }
}
