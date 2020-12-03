import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
})
export class TotalAmountComponent implements OnInit {
  totalAmount: number;
  incomingAmount: number;
  outcomingAmount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
