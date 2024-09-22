import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
const USERS = [
  new User(1, 'user1', 'user1'),
  new User(2, 'user2', 'user2')
];
let usersObservable = of(USERS);


@Injectable(
  { providedIn: "root" }
)
export class LoginService {
  private isloggedIn: boolean = false;
  getAllUsers(): Observable<User[]> {
    return usersObservable;
  }
  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    return this.getAllUsers().pipe(map(users => {
        let user = users.find(user => (user.username === username) && (user.password === password));
        if (user) {
          this.isloggedIn = true;
        } else {
          this.isloggedIn = false;
        }
        return this.isloggedIn;
      }));
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
} 
