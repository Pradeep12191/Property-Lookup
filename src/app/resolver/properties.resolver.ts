import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { Injectable } from '@angular/core'

import { Property } from '../Interfaces/property'
import { PropertyService } from '../Services/property.service'

@Injectable()
export class PropertiesResolver implements Resolve<Property[]>{

    constructor(private propertyService:PropertyService){

    }

    resolve(route:ActivatedRouteSnapshot,
            state:RouterStateSnapshot)
    {
        return this.propertyService.getProperties();
    }
}