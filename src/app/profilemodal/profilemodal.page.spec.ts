import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilemodalPage } from './profilemodal.page';

describe('ProfilemodalPage', () => {
  let component: ProfilemodalPage;
  let fixture: ComponentFixture<ProfilemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilemodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
