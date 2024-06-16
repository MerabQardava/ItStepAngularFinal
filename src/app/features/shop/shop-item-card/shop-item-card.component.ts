import {Component, inject, Input, OnInit} from '@angular/core';
import {product} from "../../Interfaces";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {CartService} from "../../cart/cart.service";
import {AuthService} from "../../register/auth.service";

@Component({
  selector: 'app-shop-item-card',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './shop-item-card.component.html',
  styleUrl: './shop-item-card.component.css'
})
export class ShopItemCardComponent implements OnInit{
  @Input() product?:product
  private readonly route=inject(Router)
  stars:number[]=[]
  cart =inject(CartService)
  auth=inject(AuthService)


  ngOnInit() {
    if(this.product&&this.product.rating>0){
      this.stars=Array(Math.ceil(this.product.rating)).fill(0).map((x, i) => i);
    }

    // console.log(!this.product?.stock  this.auth.getToken()==="")

  }



  itemRoute(arg:string|undefined):void{
    this.route.navigate([`/shop/${arg}`])
  }

  add():void{
    if(this.product){
      if(this.cart.cartData){
        this.cart.updateCartProduct(this.product?._id,1).pipe(
          tap(response=>{
            this.cart.checkCart()
            console.log(response)
          })
        ).subscribe()

      }else{
        this.cart.createCart(this.product._id,1).pipe(
          tap(response=>{
            this.cart.checkCart()
          })
        ).subscribe()
      }
    }
  }

}
