import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDashboardComponent } from './property-dashboard.component';

describe('PropertyDashboardComponent', () => {
  let component: PropertyDashboardComponent;
  let fixture: ComponentFixture<PropertyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
