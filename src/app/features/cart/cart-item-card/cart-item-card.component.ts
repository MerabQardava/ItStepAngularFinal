import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {product} from "../../Interfaces";
import {ItemService} from "../../item/item.service";
import {tap} from "rxjs";
import {CartService} from "../cart.service";
import {resolve} from "@angular/compiler-cli";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-item-card',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './cart-item-card.component.html',
  styleUrl: './cart-item-card.component.css'
})
export class CartItemCardComponent implements OnInit{
  item=inject(ItemService)
  @Input() productID?:string;
  itemData?:product
  cart=inject(CartService)
  @Output() buttonClicked = new EventEmitter<void>();
  stars:number[]=[]
  private readonly route=inject(Router)

  ngOnInit() {
    if(this.productID){
      this.item.getPosts(this.productID).pipe(
        tap(response=>{
          this.itemData=response
          this.stars=Array(Math.ceil(response.rating)).fill(0).map((x, i) => i);
        })
      ).subscribe()
    }

  }

  deleteItem():void {
    if(this.itemData){
      this.cart.deleteProduct(this.itemData?._id).pipe(
        tap(response=>{
          this.buttonClicked.emit()
        })
      ).subscribe()

    }

  }

  itemRoute(arg:string|undefined):void{
    this.route.navigate([`/shop/${arg}`])
  }


}
