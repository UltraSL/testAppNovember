import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {
  counter = signal(0);

  incrementValue(){
    this.counter.update((val) => val + 1) ;
  }
  decrementValue(){
    this.counter.update((val) => val - 1) ;
  }
  resetValue(){
    this.counter.set(0) ;
  }

}
