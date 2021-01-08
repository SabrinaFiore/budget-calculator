import { Injectable } from '@angular/core';
import { incoming } from './incoming-amount.model';

@Injectable()
export class IncomingAmountService {
  incoming: incoming[] = [
    new incoming('Salary', 4000),
    new incoming('Rent', 2000),
  ];

  delete(incoming: incoming) {
    const index: number = this.incoming.indexOf(incoming);
    this.incoming.splice(index, 1);
  }
}
