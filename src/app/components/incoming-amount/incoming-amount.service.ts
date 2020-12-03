import { Injectable } from '@angular/core';
import { Incoming } from './incoming-amount.model';

@Injectable()
export class IncomingAmountService {
  incoming: Incoming[] = [
    new Incoming('hola', 3, 12),
  ];

  constructor() {
  }

  addAmount(): void {
  }
}
