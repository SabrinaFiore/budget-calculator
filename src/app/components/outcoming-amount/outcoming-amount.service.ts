import { Injectable } from '@angular/core';
import { outcoming } from './outcoming-amount.model';

@Injectable()
export class OutcomingAmountService {
  outcoming: outcoming[] = [
    new outcoming('House', 2000),
    new outcoming('Car', 1000),
  ];

  constructor() {
  }

  delete(outcoming: outcoming) {
    const index: number = this.outcoming.indexOf(outcoming);
    this.outcoming.splice(index, 1);
  }

  addAmount(): void {
  }
}
