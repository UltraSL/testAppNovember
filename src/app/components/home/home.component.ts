import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
