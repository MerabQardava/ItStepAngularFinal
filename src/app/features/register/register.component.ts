import {Component, ElementRef, ViewChild} from '@angular/core';
import {AuthService} from "./auth.service";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import Swal from "sweetalert2";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    MatFormField,
    MatLabel,
    NgForOf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  age: number = 0;
  address: string = '';
  phone: string = '';
  zipcode: string = '';
  avatar: string = '';
  gender: string = '';
  errorMessage: string = "";


  constructor(private registerService: AuthService,private router: Router) {
  }

  onSubmit() {

    const userData = {

      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      address: this.address,
      phone: this.phone,
      zipcode: this.zipcode,
      avatar: this.avatar,
      gender: this.gender
    };

    this.registerService.signUp(userData).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['']);
        Swal.fire({title: "Registration Was Successful", text:"Email with instructions on how to verify your account was sent to your inbox"})

      },
      error => {
        console.error('Registration failed', error);
        this.errorMessage = error;
      }
    );
  }
}
