import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotificationPage } from './view-notification.page';

describe('ViewNotificationPage', () => {
  let component: ViewNotificationPage;
  let fixture: ComponentFixture<ViewNotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNotificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
