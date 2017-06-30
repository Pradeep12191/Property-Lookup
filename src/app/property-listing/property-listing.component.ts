import { Component, OnInit } from '@angular/core';
import { Property } from 'app/Interfaces/property';
import { PropertyService } from 'app/Services/property.service'
import { Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import { SlideIn, SlideOut} from 'app/animate/slide'


@Component({
  selector: 'property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css'],
  animations:[SlideIn, SlideOut],
  //adding attributes to host element(here host element is <property-listing>)
  host:{
    '[@SlideIn]':'',
    '[@SlideOut]':''
  }
})
export class PropertyListingComponent implements OnInit {

  properties:Observable<Property[]>

  constructor(
    private propertyService:PropertyService,
    private router:Router
    ) { }

  // -> here properties in not normal array of properties
  // -> properties is Observable of type Property[]
  // -> this observable is subcribed in the view(.html) using async pipe
  ngOnInit() {
    this.properties =  this.propertyService.getProperties();
  }

  gotoDetail(id:number){
    this.router.navigate(['/detail', id])
  }

}
