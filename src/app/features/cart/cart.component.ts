import {Component, inject, OnInit} from '@angular/core';
import {CartService} from "./cart.service";
import {NgForOf, NgIf} from "@angular/common";
import {Cart} from "../Interfaces";
import {CartItemCardComponent} from "./cart-item-card/cart-item-card.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    CartItemCardComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cart = inject(CartService)
  cartData?:Cart

  ngOnInit() {
    console.log(this.cart.cartData)
    this.cartData=this.cart.cartData
  }


}
