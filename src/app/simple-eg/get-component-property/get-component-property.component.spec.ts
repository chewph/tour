import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComponentPropertyComponent } from './get-component-property.component';

describe('GetComponentPropertyComponent', () => {
  let component: GetComponentPropertyComponent;
  let fixture: ComponentFixture<GetComponentPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetComponentPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetComponentPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
