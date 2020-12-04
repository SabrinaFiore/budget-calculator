import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming-amount',
  templateUrl: './incoming-amount.component.html',
})
export class IncomingAmountComponent implements OnInit {
  itemAmount: number;

  @Input() incoming = [];

  constructor() { }

  ngOnInit(): void {
  }

}
