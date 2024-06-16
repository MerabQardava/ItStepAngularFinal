import { Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {ShopComponent} from "./features/shop/shop.component";
import {RegisterComponent} from "./features/register/register.component";
import {LoginComponent} from "./features/login/login.component";
import {ItemComponent} from "./features/item/item.component";
import {ProfileComponent} from "./features/profile/profile.component";
import {CartComponent} from "./features/cart/cart.component";

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"shop",
    component:ShopComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"shop/:id",
    component:ItemComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"cart",
    component:CartComponent
  }
];
