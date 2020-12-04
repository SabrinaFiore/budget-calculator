import { Injectable } from '@angular/core';
import { incoming } from './incoming-amount.model';

@Injectable()
export class IncomingAmountService {
  incoming: incoming[] = [
    new incoming('Salary', 4.000),
    new incoming('Rent', 2.000),
  ];

  constructor() {
  }

  addAmount(): void {
  }
}
