import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailEventBindingComponent } from './hero-detail-event-binding.component';

describe('HeroDetailEventBindingComponent', () => {
  let component: HeroDetailEventBindingComponent;
  let fixture: ComponentFixture<HeroDetailEventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailEventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
