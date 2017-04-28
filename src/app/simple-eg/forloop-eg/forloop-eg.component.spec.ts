import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForloopEgComponent } from './forloop-eg.component';

describe('ForloopEgComponent', () => {
  let component: ForloopEgComponent;
  let fixture: ComponentFixture<ForloopEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForloopEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForloopEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
