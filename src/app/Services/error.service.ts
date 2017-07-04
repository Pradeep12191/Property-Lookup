import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable()
export class ErrorService{
    constructor(private router:Router){

    }
    handleError(error:any){
        console.log(error)
        return this.router.navigate(['/error'])
    }
}