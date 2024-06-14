import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../products.service";
import {ItemService} from "./item.service";
import {tap} from "rxjs";
import {product} from "../Interfaces";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

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
export class ItemComponent {
  id=""
  product?: product ;
  images:string[]=[]
  stars:number[]=[]
  private readonly itemService=inject(ItemService)
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.itemService.getPosts(this.id).pipe(
      tap(response=>{
        this.product=response;
        this.images=[...response.images]
        this.stars=Array(response.rating).fill(0).map((x, i) => i);
        console.log(response)
      })
    ).subscribe()

  }

}
