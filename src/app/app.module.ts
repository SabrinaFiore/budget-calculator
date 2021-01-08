import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './components/header/header.component';
import { IncomingAmountComponent } from './components/incoming-amount/incoming-amount.component';
import { OutcomingAmountComponent } from './components/outcoming-amount/outcoming-amount.component';
import { CountBarComponent } from './components/count-bar/count-bar.component';
import { OutcomingAmountService } from './components/outcoming-amount/outcoming-amount.service';
import { IncomingAmountService } from './components/incoming-amount/incoming-amount.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    IncomingAmountComponent,
    OutcomingAmountComponent,
    CountBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    IncomingAmountService,
    OutcomingAmountService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
