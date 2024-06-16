import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../register/auth.service";
import {tap} from "rxjs";
import {NgIf} from "@angular/common";
import {UserData} from "../Interfaces";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  private auth = inject(AuthService)
  user?:UserData

  ngOnInit(): void {
    if(!this.auth.getUserData()){
      this.auth.fetchUserData().pipe(
        tap(response=>{
          this.auth.setUserData(response)
          this.user=response
        })
      ).subscribe()
    }
    this.user=this.auth.getUserData()
    console.log(this.user)
  }




}
