import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-add-class-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-class-details.component.html',
  styleUrl: './add-class-details.component.css'
})
export class AddClassDetailsComponent {

  constructor(private formBuilder: FormBuilder){} 

  classDetails : any = {}
  form = this.formBuilder.group({
    
  })

  name: string = ""
  submit(){
    console.log("submitted")
  }
}
