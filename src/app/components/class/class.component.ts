import { Component, OnInit } from '@angular/core';
import { ClassDetailsService } from '../../Services/class-details.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [CommonModule],
  providers:[HttpClientModule, ClassDetailsService],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css',
})

export class ClassComponent implements OnInit{
  details : any = [];

  constructor(private _classService: ClassDetailsService) {}

  ngOnInit(): void {
    this._classService.getAllClassDetails().subscribe((res:any)=>{
      this.details=res 
      //console.log(this.details)
    })
  }

}
