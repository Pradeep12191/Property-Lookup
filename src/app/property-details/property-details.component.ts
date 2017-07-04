import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'app/Interfaces/property'
import { SlideUp } from 'app/animate/slide'


@Component({
  selector: 'property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
  animations:[SlideUp]
})
export class PropertyDetailsComponent implements OnInit {

  @Input('property-detail')  property:Property

  constructor() { }

  ngOnInit() {
  }

}
