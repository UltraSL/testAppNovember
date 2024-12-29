import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  slides = [
    {
      image: 'assets/slideImage1.jpg',
      title: 'Learn with Confidence'
    },
    {
      image: 'assets/slideImage2.jpg',
      title: 'Achieve Excellence'
    },
    {
      image: 'assets/slideImage3.jpg',
      title: 'Join Us Today'
    },
    {
      image: 'assets/slideImage4.jpg',
      title: 'Advance Your Skills'
    },
    {
      image: 'assets/slideImage5.jpg',
      title: 'Attractive Tutes'
    },
    {
      image: 'assets/slideImage6.jpg',
      title: 'Enjoy Learning'
    },
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide =
      (this.currentSlide + 2) % this.slides.length; // Move by 2
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 2 + this.slides.length) % this.slides.length; // Move by 2
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
