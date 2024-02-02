// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/auth';


  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`API error: ${error.status}, ${error.statusText}`);
      console.error('Error details:', error.error);
      
      // Check if the status code is 200 and treat it as success
      if (error.status === 200) {
        return throwError('Success');
      }
      // You can check if the error.error is a string and not JSON before parsing
      let errorMessage: string;
      if (typeof error.error === 'string') {
        errorMessage = error.error;
      } else {
        errorMessage = 'Something went wrong on the server. Please try again later.';
      }

      return throwError(errorMessage);
    }

    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data).pipe(
      catchError(this.handleError)
    );
  }


    login(credentials: { username: string; password: string }): Observable<any> {
      const loginUrl = `${this.apiUrl}/login`;
      return this.http.post(loginUrl, credentials);
    }

}
