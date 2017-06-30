import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'app/Interfaces/property'


@Component({
  selector: 'property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  @Input('property-detail')  property:Property

  constructor() { }

  ngOnInit() {
  }

}
