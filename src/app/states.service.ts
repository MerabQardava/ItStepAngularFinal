import { Injectable } from '@angular/core';
import {pageData} from "./features/Interfaces";

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  private pagesCache:{[key:string]:pageData}={}
  private totalPages:number=0

  getPage(pageNum:number):pageData{
    return this.pagesCache[pageNum]
  }

  getTotalPages():number{
    return this.totalPages
  }

  setPageCache(page:pageData):void{
    if(Object.keys(this.pagesCache).length === 0){
      this.totalPages=Math.ceil(page.total/8)
      console.log(this.totalPages)
    }
    this.pagesCache={...this.pagesCache,[page.page]:page}
  }

  clearPageCache(){
    this.pagesCache={}
  }

  constructor() { }
}
