import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {AuthService} from "../register/auth.service";
import {Router} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService,private router: Router,private cart:CartService) {}

  onSubmit() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.authService.signIn(credentials).subscribe(
      response => {
        console.log('Sign-in successful', response);
        this.authService.setToken(response.access_token)
        this.router.navigate(['']);
        this.cart.checkCart()

      },
      error => {
        console.error('Sign-in failed', error);
        this.errorMessage = error;
      }
    );
  }
}
