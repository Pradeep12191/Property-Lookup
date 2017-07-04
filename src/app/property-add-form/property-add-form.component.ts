import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Property } from 'app/Interfaces/property'
import { PropertyService } from 'app/Services/property.service'

@Component({
  selector: 'property-add-form',
  templateUrl: './property-add-form.component.html',
  styleUrls: ['./property-add-form.component.css']
})
export class PropertyAddFormComponent implements OnInit {

  @Output() propertyAdded:EventEmitter<Property> = new EventEmitter<Property>();

  private propertyTypes:string[] = ["House", "Condo", "Duplex"]
  private property:Property = new Property();
  private id:number = 10;

  constructor(
    private propertyService:PropertyService
  ) { }

  ngOnInit() {
  }

  addProperty(property:Property){
    property.id = this.id;
    property.image = "default-home";
    this.propertyService.addProperty(property)
        .subscribe(property => {
          console.log(property)
          this.propertyAdded.emit(property)
          this.property = new Property();
          this.id ++;
        })
    
  }
}
