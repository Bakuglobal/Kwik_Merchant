import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmodalPage } from './productmodal.page';

describe('ProductmodalPage', () => {
  let component: ProductmodalPage;
  let fixture: ComponentFixture<ProductmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
