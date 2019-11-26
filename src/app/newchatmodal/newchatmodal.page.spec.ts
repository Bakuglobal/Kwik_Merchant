import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewchatmodalPage } from './newchatmodal.page';

describe('NewchatmodalPage', () => {
  let component: NewchatmodalPage;
  let fixture: ComponentFixture<NewchatmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewchatmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewchatmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
