import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalAmountComponent } from './components/total-amount/total-amount.component';
import { IncomingAmountComponent } from './components/incoming-amount/incoming-amount.component';
import { OutcomingAmountComponent } from './components/outcoming-amount/outcoming-amount.component';
import { CountBarComponent } from './components/count-bar/count-bar.component';
import { OutcomingAmountService } from './components/outcoming-amount/outcoming-amount.service';
import { IncomingAmountService } from './components/incoming-amount/incoming-amount.service';

@NgModule({
  declarations: [
    AppComponent,
    TotalAmountComponent,
    IncomingAmountComponent,
    OutcomingAmountComponent,
    CountBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    IncomingAmountService,
    OutcomingAmountService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
