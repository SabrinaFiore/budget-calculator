import { Component, OnInit } from '@angular/core';
import { incoming } from './components/incoming-amount/incoming-amount.model';
import { outcoming } from './components/outcoming-amount/outcoming-amount.model';
import { IncomingAmountService } from './components/incoming-amount/incoming-amount.service';
import { OutcomingAmountService } from './components/outcoming-amount/outcoming-amount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit{
  incoming: incoming[] = [];
  outcoming: outcoming[] = [];

  constructor(private IncomingService: IncomingAmountService, private OutcomingService: OutcomingAmountService) {
    this.incoming = IncomingService.incoming;
    this.outcoming = OutcomingService.outcoming;
  }

  getTotalIcoming(): any {
    let TotalIcoming = 0;
    this.incoming.forEach(incoming => {
      TotalIcoming += incoming.value;
    });
    return TotalIcoming;
  }

  getTotalOutcoming(): any {
    let TotalOutcoming = 0;
    this.outcoming.forEach(outcoming => {
      TotalOutcoming += outcoming.value;
    });
    return TotalOutcoming;
  }

  getTotalPercentage(): any {
    return this.getTotalOutcoming() / this.getTotalIcoming();
  }

  getTotalAmount(): any {
    return this.getTotalIcoming() + this.getTotalOutcoming();
  }

  ngOnInit(): void {
    console.log(this.getTotalIcoming);
  }
}
