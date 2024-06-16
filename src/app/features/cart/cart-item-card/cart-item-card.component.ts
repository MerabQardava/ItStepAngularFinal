import {Component, inject, Input, OnInit} from '@angular/core';
import {product} from "../../Interfaces";
import {ItemService} from "../../item/item.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-cart-item-card',
  standalone: true,
  imports: [],
  templateUrl: './cart-item-card.component.html',
  styleUrl: './cart-item-card.component.css'
})
export class CartItemCardComponent implements OnInit{
  item=inject(ItemService)
  @Input() productID?:string;
  itemData?:product

  ngOnInit() {
    if(this.productID){
      this.item.getPosts(this.productID).pipe(
        tap(response=>{
          this.itemData=response
        })
      ).subscribe()
    }


  }


}
