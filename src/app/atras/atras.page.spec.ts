import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrasPage } from './atras.page';

describe('AtrasPage', () => {
  let component: AtrasPage;
  let fixture: ComponentFixture<AtrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtrasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
