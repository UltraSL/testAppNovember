import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _loginUrl = "http://localhost:3000/api/user/loginUser" 
  private tokenKey = 'token'; // Key for the token in localStorage
  private decodedToken: any | null = null;

  constructor(private _http: HttpClient, private router: Router) { }

  userData : any = {}
  role : any = {}

  userLogIn(user: any){
    return this._http.post(this._loginUrl, user)
  }

  private decodeToken(): void {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      try {
        this.decodedToken = jwtDecode(token);
      } catch (error) {
        console.error('Error decoding token:', error);
        this.decodedToken = null;
      }
    } else {
      this.decodedToken = null;
    }
  }

  public getDecodedToken(): any {
    if (!this.decodedToken) {
      this.decodeToken(); // Decode only if not already done
    }
    return this.decodedToken;
  }

  // Get specific user details like role
  public getUserRole(): string | null {
    const decoded = this.getDecodedToken();
    return decoded?.role || null;
  }

  public getUserName(): string | null {
    const decoded = this.getDecodedToken();
    return decoded?.name || null;
  }

  // Check if user is logged in
  public isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      const token = localStorage.getItem('token');
      return !!token; // Return true if a token exists
    } else {
      return false;
    }
  }

  // Clear user session
  public logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.decodedToken = null;
    this.router.navigate(['/home']).then(()=>{
      window.location.reload();
    })
  }

//   isLoggedIn(){
//     this.userData = localStorage.getItem('user')
//     this.role = JSON.parse(this.userData).role
//     console.log("role:" , JSON.parse(this.userData).role)
//     if(this.role == 'admin'){
//       return true
//     }
//     return false
//   }
}
