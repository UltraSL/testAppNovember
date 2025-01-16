import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../Services/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import {jwtDecode} from 'jwt-decode';
import { decode } from 'punycode';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule ],
  providers:[AuthServiceService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userData : any = {}
  loggedUserData : any = {}

  constructor(private _auth: AuthServiceService, private router: Router){}

  loginUser(){
    this._auth.userLogIn(this.userData).subscribe(
      (res: any)=>{
        if(res.token){
          localStorage.setItem("token",res.token)
          this.router.navigate(['/class']).then(()=>{
            window.location.reload();
          })
        }else {
          console.log("No token recieved")
        }
      },
      (err :any)=> {
        console.log("Login Failed" , err)
      }
    )
  }
}
