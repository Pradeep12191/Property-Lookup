
import { Observable }     from 'rxjs/Observable';

export interface ICommonService<T>  {
    getAll():Observable<T[]>;
    getById(id:number):Observable<T>;
    update(id:number, object:T):Observable<T>;
    delete(id:number):Promise<T>;
}