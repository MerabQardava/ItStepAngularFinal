import {Component, inject, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {ProductsService} from "../../products.service";
import {JsonPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {StatesService} from "../../states.service";
import {Router} from "@angular/router";
import {ShopItemCardComponent} from "./shop-item-card/shop-item-card.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    NgIf,
    NgClass,
    ShopItemCardComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  pageCache=inject(StatesService)
  page:number=1
  pagesArr:number[]=[]
  private readonly productsService=inject(ProductsService)
  category:number|null=null
  private readonly route=inject(Router)


  ngOnInit() {
    this.fetchPage()
    if(this.pageCache.getTotalPages()){
      this.pagesArr= Array(Math.ceil(this.pageCache.getTotalPages())).fill(1).map((x,i)=>i+1);
    }
  }

  toPage(num:number):void{
    this.page=num
    this.fetchPage()
  }

  fetchPage():void{
    if(!this.pageCache.getPage(this.page)){
      this.productsService.getPosts(this.page,this.category).pipe(
        tap(response=>{
          console.log("inside")
          this.pageCache.setPageCache(response)
          this.pagesArr= Array(Math.ceil(this.pageCache.getTotalPages())).fill(1).map((x,i)=>i+1);
        })
      ).subscribe()
    }
  }

  changePage(arg:string):void{
    if(arg==="+"&&this.pageCache.getTotalPages()>this.page){

      this.page++

    }else if(this.page>1&&arg==="-"){
      this.page--
    }
    // console.log(this.page)
    this.fetchPage()
  }

  changeCategory(category:string){
    this.page=1
    if(category==="laptop"){
      this.category=1
    }else if(category==="phone"){
      this.category=2
    }else{
      this.category=null
    }
    this.pageCache.clearPageCache()
    this.fetchPage()

  }






}
