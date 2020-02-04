import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPreviewPage } from './order-preview.page';

describe('OrderPreviewPage', () => {
  let component: OrderPreviewPage;
  let fixture: ComponentFixture<OrderPreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
