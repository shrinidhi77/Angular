import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
    
    canLoginToday(): boolean {
        console.log("Hello")
        let today = new Date();
        console.log(today.getDay())
        if(today.getDay() == 0 || today.getDay() == 6 ) {
            return false; // weekends
        }
        else return true;
    }
}
