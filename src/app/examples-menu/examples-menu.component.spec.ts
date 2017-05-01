import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesMenuComponent } from './examples-menu.component';

describe('ExamplesMenuComponent', () => {
  let component: ExamplesMenuComponent;
  let fixture: ComponentFixture<ExamplesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
