import { Injectable } from '@angular/core';
import {catchError, Observable, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {UserData} from "../Interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signUpUrl = 'https://api.everrest.educata.dev/auth/sign_up';
  private signInUrl = 'https://api.everrest.educata.dev/auth/sign_in';
  private token :string=""
  private userData?:UserData
  private userEmail?:string;
  constructor(private http: HttpClient) { }


  setUserData(data:UserData){
    this.userData=data
  }
  getUserData():UserData|undefined{
    return this.userData
  }

  verifyEmail(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = { email: this.userEmail};

    return this.http.post<any>("https://api.everrest.educata.dev/auth/verify_email", body, { headers });
  }

  setToken(token:string):void{
    this.token=token;
  }

  getToken():string{
    return this.token;
  }

  logOut():void{
    this.token=""
    this.userEmail=""
    this.userData=undefined
  }

  fetchUserData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<any>("https://api.everrest.educata.dev/auth", { headers });

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
    this.userEmail=credentials.email
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
    return throwError(error.error.errorKeys);
  }

}
