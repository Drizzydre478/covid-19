import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTimelineComponent } from './country-timeline.component';

describe('CountryTimelineComponent', () => {
  let component: CountryTimelineComponent;
  let fixture: ComponentFixture<CountryTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
