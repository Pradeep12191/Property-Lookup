import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

import { Property } from '../Interfaces/property'

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'


@Injectable()
export class PropertyService {

  private propertiesUrl = 'api/properties';


  constructor(
    private http:Http
  ) { }

  getProperties():Observable<Property[]>{
    return this.http.get(this.propertiesUrl)
              .map(response => response.json().data as Array<Property>)
  }

  getProperty(id:number):Observable<Property>{
    return this.http.get(`${this.propertiesUrl}/${id}`)
                  .map(response => response.json().data as Property)
  }

  

}
