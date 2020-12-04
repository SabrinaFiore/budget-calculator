import { Component, OnInit } from '@angular/core';
import { IncomingAmountService } from 'src/app/components/incoming-amount/incoming-amount.service';

@Component({
  selector: 'app-count-bar',
  templateUrl: './count-bar.component.html',
})

export class CountBarComponent implements OnInit {
  selected = false;

  constructor(private IncomingAmount: IncomingAmountService) { }

  ngOnInit(): void {
  }

  // onAddAmout(): void {
  //   const Incoming1 = new Incoming[];
  // }
}
