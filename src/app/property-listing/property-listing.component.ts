import { Component, OnInit } from '@angular/core';
import { properties } from 'data/properties'

@Component({
  selector: 'property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {

  properties:Array<any>

  constructor() { }

  ngOnInit() {
    this.properties = properties
  }

}
