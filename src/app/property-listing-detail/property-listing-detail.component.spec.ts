import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingDetailComponent } from './property-listing-detail.component';

describe('PropertyListingDetailComponent', () => {
  let component: PropertyListingDetailComponent;
  let fixture: ComponentFixture<PropertyListingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyListingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyListingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
