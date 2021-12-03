import { InjectionToken } from "@angular/core";
import { HostModel } from "./host-model";

export const HOST_TOKEN = new InjectionToken<HostModel>('HOST_TOKEN');
