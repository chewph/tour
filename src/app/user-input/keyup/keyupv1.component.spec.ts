import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Keyupv1Component } from './keyupv1.component';

describe('Keyupv1Component', () => {
  let component: Keyupv1Component;
  let fixture: ComponentFixture<Keyupv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Keyupv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Keyupv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
