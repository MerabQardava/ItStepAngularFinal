import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {NgIf} from "@angular/common";
import {AuthService} from "./features/register/auth.service";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIcon} from "@angular/material/icon";
import {MatBadge} from "@angular/material/badge";
import {CartService} from "./features/cart/cart.service";
import {CartIconComponent} from "./features/cart/cart-icon/cart-icon.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, NgIf, MatSlideToggleModule, MatIcon, MatBadge, CartIconComponent, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'untitled2';

  constructor(public authService: AuthService,private router: Router) {}

  ngOnInit(): void {



  }

  logOut(){
    this.authService.logOut()
    this.router.navigate(['']);

  }





}
