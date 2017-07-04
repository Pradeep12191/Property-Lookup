import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

import { Property } from '../Interfaces/property'
import { CommonService } from '../Services/common.service'
import { ErrorService } from './error.service'

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class PropertyService {

  private propertiesUrl = 'api/properties';
  private commonService:CommonService<Property> = new CommonService<Property>(
                this.http,
                this.propertiesUrl,
                this.errorService
            )
  constructor(
    private http:Http,
    private errorService:ErrorService,
  ) { }

  getProperties():Observable<Property[]>{
      return this.commonService.getAll();              
  }

  getProperty(id:number):Observable<Property>{
      return this.commonService.getById(id);
  }

  updateProperty(id:number, property:Property):Observable<Property>{
    return this.commonService.update(id, property);
  }

  deleteProperty(id:number){
    return this.commonService.delete(id)
  }
  

}
