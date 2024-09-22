import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service'
@Injectable()
export class AccessGuardService implements CanActivate {
    constructor(private serv:UserService, private router: Router ) {};
    canActivate() {
        let data = this.serv.canLoginToday()
        console.log("here",this.serv.canLoginToday())
        if(this.serv.canLoginToday()) {
            this.router.navigate(['/login'])
            return true;
            
        } else {
            return false;
        }
        
    }
}
