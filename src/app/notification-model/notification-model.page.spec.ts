import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationModelPage } from './notification-model.page';

describe('NotificationModelPage', () => {
  let component: NotificationModelPage;
  let fixture: ComponentFixture<NotificationModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationModelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
