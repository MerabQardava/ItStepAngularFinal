import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly http=inject(HttpClient)



  getPosts(id:string): Observable<any>{
    return this.http.get<any>(`https://api.everrest.educata.dev/shop/products/id/${id}`)

  }
}
