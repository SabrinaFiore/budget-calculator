import { outcoming } from './../outcoming-amount/outcoming-amount.model';
import { OutcomingAmountService } from './../outcoming-amount/outcoming-amount.service';
import { Component, OnInit } from '@angular/core';
import { IncomingAmountService } from './../incoming-amount/incoming-amount.service';
import { incoming } from '../incoming-amount/incoming-amount.model';


@Component({
  selector: 'app-count-bar',
  templateUrl: './count-bar.component.html',
})

export class CountBarComponent implements OnInit {
  type: string = "incomingOperation";
  descriptionInput: string;
  valueInput: number;

  constructor(private IncomingAmountService: IncomingAmountService, private OutcomingAmountService: OutcomingAmountService) {}

  ngOnInit(): void {
  }

  operationType(event) {
    this.type = event.target.value;
  }

  addAmount(){
    if(this.type === "incomingOperation")
      this.IncomingAmountService.incoming.push(new incoming(this.descriptionInput, this.valueInput));
    else
      this.OutcomingAmountService.outcoming.push(new outcoming(this.descriptionInput, this.valueInput));
  }
}
