import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // private apiUrl="https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=6"
  private readonly http=inject(HttpClient)



  getPosts(page:number=1,category:number|null=null): Observable<any>{
    if(!category){
      return this.http.get<any>(`https://api.everrest.educata.dev/shop/products/all?page_index=${page}&page_size=8`)
    }else{
      return this.http.get<any>(`https://api.everrest.educata.dev/shop/products/category/${category}?page_index=${page}&page_size=8`)
    }
  }



}
