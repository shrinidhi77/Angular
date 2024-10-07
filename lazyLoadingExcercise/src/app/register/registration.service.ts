import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private apiUrl = 'http://localhost:3000/register'; // Update with your server URL

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, { responseType: 'text' }).pipe(
      catchError((error: any) => {
        console.error('Registration failed', error);
        return throwError('Registration failed');
      })
    );
  }
  
}
