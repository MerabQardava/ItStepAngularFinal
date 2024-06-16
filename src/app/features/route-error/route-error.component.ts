import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-route-error',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './route-error.component.html',
  styleUrl: './route-error.component.css'
})
export class RouteErrorComponent {

}
