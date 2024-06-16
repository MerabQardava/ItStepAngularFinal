import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {AuthService} from "../register/auth.service";
import {Cart} from "../Interfaces";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://api.everrest.educata.dev/shop/cart/product';
  private auth = inject(AuthService)
  cartData?:Cart

  constructor(private http: HttpClient) {}

  createCart(productId: string, quantity: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const body = {
      id: productId,
      quantity: quantity
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }

  checkCart(){
    this.getCart().pipe(
      tap(response=>{
        this.cartData=response
      }),
      catchError(err => {

        if(err.status===409){
          console.log("mecho")
          this.cartData=undefined
        }
        return of(`Bad Promise: ${err}`);
      })
    ).subscribe()
  }

  getCart():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`,
      'Content-Type': 'application/json'

    });
    return this.http.get("https://api.everrest.educata.dev/shop/cart",{headers})
  }

  updateCartProduct(productId: string, quantity: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`,
      'Content-Type': 'application/json'
    });

    return this.http.patch(this.apiUrl, {id:productId,quantity:quantity}, { headers });
  }

  deleteProduct(productId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getToken()}`,
      'Accept': 'application/json'
    });

    const body = { id: productId };

    return this.http.delete("https://api.everrest.educata.dev/shop/cart/product", { headers: headers, body: body });
  }

}
