import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../products.service";
import {ItemService} from "./item.service";
import {catchError, of, tap} from "rxjs";
import {product} from "../Interfaces";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {CartService} from "../cart/cart.service";


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    NgIf
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{
  id=""
  product?: product ;
  images:string[]=[]
  stars:number[]=[]
  private readonly itemService=inject(ItemService)
  constructor(private route: ActivatedRoute) { }
  private cart=inject(CartService)

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.itemService.getPosts(this.id).pipe(
      tap(response=>{
        this.product=response;
        this.images=[...response.images]
        this.stars=Array(Math.ceil(response.rating)).fill(0).map((x, i) => i);
        console.log(response)
      })
    ).subscribe()

  }

  add():void{
    if(this.cart.cartData){
     this.cart.updateCartProduct(this.id,1).pipe(
       tap(response=>{
         this.cart.checkCart()
         console.log(response)
       })
     ).subscribe()

    }else{
      this.cart.createCart(this.id,1).pipe().subscribe()
    }

  }


}
