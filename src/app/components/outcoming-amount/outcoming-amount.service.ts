import { Injectable } from "@angular/core";
import { Outcoming } from './outcoming-amount.model';

@Injectable()
export class OutcomingAmountService {
  outcoming: Outcoming[] = [
    new Outcoming('ciao', 2, 200)
  ];

  constructor() {
  }

  addAmount(): void {
  }
}
