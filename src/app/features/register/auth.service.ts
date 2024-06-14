import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signUpUrl = 'https://api.everrest.educata.dev/auth/sign_up';
  private signInUrl = 'https://api.everrest.educata.dev/auth/sign_in';
  private token :string=""
  constructor(private http: HttpClient) { }

  setToken(token:string):void{
    this.token=token;
  }

  getToken():string{
    return this.token;
  }

  logOut():void{
    this.token=""
  }

  signUp(userData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*'
    });

    return this.http.post(this.signUpUrl, userData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  signIn(credentials: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*'
    });

    return this.http.post(this.signInUrl, credentials, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.error);
    return throwError('Something went wrong; please try again later.');
  }
}
