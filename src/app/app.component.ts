import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {NgIf} from "@angular/common";
import {AuthService} from "./features/register/auth.service";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, NgIf,MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled2';
  constructor(public authService: AuthService) {}
}
