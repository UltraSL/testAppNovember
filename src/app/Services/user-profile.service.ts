import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor() { }

  private data: string[]=[];

  addData(item: string): void {
    this.data.push(item);
  }

  getData(): string[] {
    return this.data;
  }

}
