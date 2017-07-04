import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PropertyService } from '../Services/property.service'
import { Property } from '../Interfaces/Property'

import 'rxjs/add/operator/switchMap'
//import 'rxjs/add/operator/su'

@Component({
  selector: 'app-property-listing-detail',
  templateUrl: './property-listing-detail.component.html',
  styleUrls: ['./property-listing-detail.component.css']
})
export class PropertyListingDetailComponent implements OnInit {

  property:Property;
  propertyTypes:String[] = ["House", "Condo", "Duplex"];
  propertyId:number;

  constructor(
    private propertyService:PropertyService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.paramMap.get('id');
    this.route.params.switchMap((params:Params) => this.propertyService.getProperty(+params['id']))
                                .subscribe(property => this.property = property)
  }

  goBack(){
    this.location.back();
  }

  onPropertySubmit(value:Property){
    this.propertyService.updateProperty(this.propertyId, value)
                  .subscribe(data => this.location.back())
  }

}
