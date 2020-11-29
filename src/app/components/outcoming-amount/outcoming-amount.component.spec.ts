import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutcomingAmountComponent } from './outcoming-amount.component';

describe('OutcomingAmountComponent', () => {
  let component: OutcomingAmountComponent;
  let fixture: ComponentFixture<OutcomingAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutcomingAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomingAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
