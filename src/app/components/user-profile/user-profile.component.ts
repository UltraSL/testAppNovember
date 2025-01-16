import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserProfileService } from '../../Services/user-profile.service';
import { NgFor } from '@angular/common';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserProfileService, private auth : AuthServiceService) {}

  text : string = '';
  listData : any  = {}
  userData : any = {}
  userName : any = {}

  addButton(text : string){
    this.userService.addData(this.text);
    this.listData = this.userService.getData();
    console.log(this.listData);
  }

  userLogout(){
    this.auth.logout()
  }

  ngOnInit() {
    this.userData = this.auth.getDecodedToken();
  } 
  

  

}
