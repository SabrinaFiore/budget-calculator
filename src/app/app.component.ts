import { Incoming } from './components/incoming-amount/incoming-amount.model';
import { Component } from '@angular/core';
import { Outcoming } from './components/outcoming-amount/outcoming-amount.model';
import { IncomingAmountService } from './components/incoming-amount/incoming-amount.service';
import { OutcomingAmountService } from './components/outcoming-amount/outcoming-amount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  incoming: Incoming[] = [];
  outcoming: Outcoming[] = [];

  constructor(private IncomingService: IncomingAmountService, private OutcomingService: OutcomingAmountService) {
    this.incoming = IncomingService.incoming;
    this.outcoming = OutcomingService.outcoming;
  }

  getTotalIcoming(): any {
    let TotalIcoming = 0;
    this.incoming.forEach(incoming => {
      TotalIcoming = + this.incoming.values;
    });
    return this.getTotalIcoming();
  }

  getTotalOutcoming(): any {
    let TotalOutcoming = 0;
    this.outcoming.forEach(outcoming => {
      TotalOutcoming = + this.outcoming.values;
    });
    return this.getTotalOutcoming();
  }

  getTotalPercentage(): any {
    return this.getTotalOutcoming() / this.getTotalIcoming();
  }

  getTotalAmount(): any {
    return this.getTotalIcoming() + this.getTotalOutcoming();
  }
}
