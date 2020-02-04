import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatsPage } from './order-stats.page';

describe('OrderStatsPage', () => {
  let component: OrderStatsPage;
  let fixture: ComponentFixture<OrderStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderStatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
