import { OutcomingAmountService } from './outcoming-amount.service';
import { outcoming } from './outcoming-amount.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-outcoming-amount',
  templateUrl: './outcoming-amount.component.html',
})
export class OutcomingAmountComponent implements OnInit {

  outcoming: any[];
  @Input() totalAmount: number;

  constructor(private OutcomingAmountService: OutcomingAmountService) { }

  ngOnInit(): void {
    this.outcoming = this.OutcomingAmountService.outcoming;
  }

  deleteOutcoming(outcoming: outcoming) {
    this.OutcomingAmountService.delete(outcoming);
  }

  calculatePercentage(outcoming: outcoming) {
    return outcoming.value/this.totalAmount;
  }
}
