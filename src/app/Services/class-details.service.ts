import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassDetailsService{

  classDetails = []
  constructor(private http: HttpClient) { }

  private _addClassDetailsUrl = "http://localhost:3000/api/classDetails/createClassDetail";
  private _getAllClassDetailsUrl = "http://localhost:3000/api/classDetails/getAllClassDetails";
  
  getAllClassDetails(){
    return this.http.get<any>(this._getAllClassDetailsUrl)
  }

}
