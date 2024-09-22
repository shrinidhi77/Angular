import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Example observable data (can be from HTTP call or any other source)
  getData(): Observable<string[]> {
    return of(['Item 1', 'Item 2', 'Item 3']);
  }
}
