import {Component, inject, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatBadge} from "@angular/material/badge";
import {CartService} from "../cart.service";
import {JsonPipe} from "@angular/common";
import {CartNumberPipePipe} from "./cart-number-pipe.pipe";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [
    MatIcon,
    MatBadge,
    JsonPipe,
    CartNumberPipePipe,
    RouterLink
  ],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.css'
})
export class CartIconComponent implements OnInit{
  cart = inject(CartService)

  ngOnInit() {


  }

}
