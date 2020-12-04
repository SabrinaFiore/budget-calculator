import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class Header implements OnInit {
  @Input() totalAmount: number;
  @Input() totalIncomingAmount: number;
  @Input() totalOutcomingAmount: number;
  @Input() totalPercentageAmount: number;

  constructor() { }

  ngOnInit(): void {
  }
}
