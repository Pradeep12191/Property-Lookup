import {ICommonService } from '../Interfaces/commonService'
import {ErrorService } from '../Services/error.service'
import { Observable }     from 'rxjs/Observable';
import { Http, Headers } from '@angular/http'

export class CommonService<T> implements ICommonService<T>{
    
    constructor(
        private http:Http,
        private url,
        private errorService:ErrorService
    ){
    }

    getAll():Observable<T[]>{
        return this.http.get(this.url)
                        .map(response => response.json().data as T[] )
                        .catch(this.errorService.handleError)

    }

    getById(id:number):Observable<T>{
        return this.http.get(`${this.url}/${id}`)
                        .map(response => response.json().data as T )
                        .catch(this.errorService.handleError)
    }

    update(id:number, object:T):Observable<T>{
        return this.http.put(`${this.url}/${id}`, JSON.stringify(object))
                        .map((response:any) => {
                            return response
                        })
                        .catch(this.errorService.handleError)

    }

    delete(id:number):Promise<T>{
        return this.http.delete(`${this.url}/${id}`)
                        .toPromise()
                        .then((response:any) => {
                            return null
                        })
                        .catch(this.errorService.handleError)
    }

    add(object:T):Observable<T>{
        return this.http.post(this.url, JSON.stringify(object))
                        .map((response:any) => response.json().data as T)
                        .catch(this.errorService.handleError)
    }

}