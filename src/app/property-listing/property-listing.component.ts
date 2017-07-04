import { Component, OnInit } from '@angular/core';
import { Property } from 'app/Interfaces/property';
import { PropertyService } from 'app/Services/property.service'
import { Router, ActivatedRoute } from '@angular/router';
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

  properties:Property[]
  btnText = "Add"

  constructor(
    private propertyService:PropertyService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  // -> here properties in not normal array of properties
  // -> properties is Observable of type Property[]
  // -> this observable is subcribed in the view(.html) using async pipe
  ngOnInit() {
    //this.properties =  this.propertyService.getProperties();

    
    //implemented using resolver
    this.route.data.subscribe(data => {
      this.properties = data['properties']
    })
  }

  gotoDetail(id:number){
    this.router.navigate(['/detail', id])
  }

  deleteProperty(id:number){
    this.propertyService.deleteProperty(id)
        .then(() => {
          this.properties = this.properties.filter(p => p.id != id)
        })
  }

  onPropertyAdded(property:Property){
    this.properties.push(property)
  }

}
