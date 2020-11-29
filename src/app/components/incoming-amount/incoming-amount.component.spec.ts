import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingAmountComponent } from './incoming-amount.component';

describe('IncomingAmountComponent', () => {
  let component: IncomingAmountComponent;
  let fixture: ComponentFixture<IncomingAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
