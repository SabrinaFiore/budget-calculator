import { OutcomingAmountService } from './components/outcoming-amount/outcoming-amount.service';
import { IncomingAmountService } from './components/incoming-amount/incoming-amount.service';
import { Component, OnInit } from '@angular/core';
import { incoming } from './components/incoming-amount/incoming-amount.model';
import { outcoming } from './components/outcoming-amount/outcoming-amount.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit{
  incoming: incoming[] = [];
  outcoming: outcoming[] = [];

  constructor(private IncomingAmountService: IncomingAmountService, private OutcomingAmountService: OutcomingAmountService) {
    this.incoming = this.IncomingAmountService.incoming;
    this.outcoming = this.OutcomingAmountService.outcoming;
  }

  getTotalAmount() {
    return this.getTotalIcoming() - this.getTotalOutcoming();
  }

  getTotalIcoming() {
    let TotalIcoming: number = 0;
    this.incoming.forEach(incoming => {
      TotalIcoming += incoming.value;
    });
    return TotalIcoming;
  }

  getTotalOutcoming() {
    let TotalOutcoming = 0;
    this.outcoming.forEach(outcoming => {
      TotalOutcoming += outcoming.value;
    });
    return TotalOutcoming;
  }

  getTotalPercentage() {
    return this.getTotalOutcoming() / this.getTotalIcoming();
  }

  ngOnInit(): void {
  }
}
