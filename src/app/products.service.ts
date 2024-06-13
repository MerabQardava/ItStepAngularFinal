import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl="https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=6"
  private readonly http=inject(HttpClient)



  getPosts(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
}
