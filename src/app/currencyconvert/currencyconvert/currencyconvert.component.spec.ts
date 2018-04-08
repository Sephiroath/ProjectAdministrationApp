import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyconvertComponent } from './currencyconvert.component';

describe('CurrencyconvertComponent', () => {
  let component: CurrencyconvertComponent;
  let fixture: ComponentFixture<CurrencyconvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyconvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyconvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
