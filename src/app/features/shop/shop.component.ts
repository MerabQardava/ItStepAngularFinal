import {Component, inject, OnInit} from '@angular/core';
import {RegisterService} from "../register.service";
import {Observable, tap} from "rxjs";
import {ProductsService} from "../../products.service";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {product} from "../Interfaces";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    NgIf
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  products:product[]=[];

  private readonly productsService=inject(ProductsService)


  ngOnInit() {
    this.productsService.getPosts().pipe(
      tap(response=>{
        this.products=[...this.products,...response.products]
        console.log(this.products)
    })
    ).subscribe()
  }




}
