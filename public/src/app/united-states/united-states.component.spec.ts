import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedStatesComponent } from './united-states.component';

describe('UnitedStatesComponent', () => {
  let component: UnitedStatesComponent;
  let fixture: ComponentFixture<UnitedStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitedStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitedStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
