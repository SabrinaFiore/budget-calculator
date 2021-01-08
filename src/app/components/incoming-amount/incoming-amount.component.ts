import { incoming } from './incoming-amount.model';
import { IncomingAmountService } from './incoming-amount.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming-amount',
  templateUrl: './incoming-amount.component.html',
})
export class IncomingAmountComponent implements OnInit {
  // itemAmount: number;

  incoming: any[];
  totalAmount: number;

  constructor(private IncomingAmountService: IncomingAmountService) { }

  ngOnInit(): void {
    this.incoming = this.IncomingAmountService.incoming;
  }

  clearLog(incoming: incoming) {
    this.IncomingAmountService.delete(incoming);
  }
}
