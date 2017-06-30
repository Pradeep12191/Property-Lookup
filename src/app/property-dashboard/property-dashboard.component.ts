import { Component, OnInit } from '@angular/core';
import { SlideIn, SlideOut} from 'app/animate/slide'
import { Property } from 'app/Interfaces/property';
import { PropertyService } from 'app/Services/property.service'

import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'app-property-dashboard',
  templateUrl: './property-dashboard.component.html',
  styleUrls: ['./property-dashboard.component.css'],
  animations:[SlideIn, SlideOut],
  host:{
    '[@SlideIn]':'',
    '[@SlideOut]':''
  }
})
export class PropertyDashboardComponent implements OnInit {

  properties:Observable<Property[]>
  constructor(private propertyService:PropertyService) { }

  // -> here properties in not normal array of properties
  // -> properties is Observable of type Property[]
  // -> this observable is subcribed in the view(.html) using async pipe
  ngOnInit() {
    this.properties =  this.propertyService.getProperties();
  }

}
