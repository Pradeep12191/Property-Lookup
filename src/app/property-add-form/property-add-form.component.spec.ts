import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAddFormComponent } from './property-add-form.component';

describe('PropertyAddFormComponent', () => {
  let component: PropertyAddFormComponent;
  let fixture: ComponentFixture<PropertyAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
