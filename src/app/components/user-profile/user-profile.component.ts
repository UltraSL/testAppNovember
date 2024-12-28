import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserProfileService } from '../../Services/user-profile.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserProfileService) {}

  text : string = '';
  listData : string[]  = []

  addButton(text : string){
    this.userService.addData(this.text);
    this.listData = this.userService.getData();
    console.log(this.listData);
  }

  ngOnInit() {
    this.listData = this.userService.getData();
    console.log(this.listData);
  }
  

  

}
