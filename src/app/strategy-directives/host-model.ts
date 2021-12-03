import { Observable } from "rxjs";

export interface HostModel {
  computeMessage(message: string): string;
  get computedMessage$(): Observable<string>;
}
