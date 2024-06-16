import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../features/register/auth.service";

@Component({
  selector: 'app-verification-modal',
  standalone: true,
  imports: [],
  templateUrl: './verification-modal.component.html',
  styleUrl: './verification-modal.component.css'
})
export class VerificationModalComponent{
  private auth=inject(AuthService)



  verify():void{

    console.log(this.auth.verifyEmail().pipe().subscribe())
  }


}
