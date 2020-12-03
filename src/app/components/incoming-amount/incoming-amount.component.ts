import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming-amount',
  templateUrl: './incoming-amount.component.html',
})
export class IncomingAmountComponent implements OnInit {
  itemAmount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
