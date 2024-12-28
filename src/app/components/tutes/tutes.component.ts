import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tutes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutes.component.html',
  styleUrl: './tutes.component.css'
})
export class TutesComponent {
  documents = [
    { name: 'Tute 1', year: 2023, link: 'https://example.com/doc1' },
    { name: 'Tute 2', year: 2024, link: 'https://example.com/doc2' },
    { name: 'Tute 3', year: 2025, link: 'https://example.com/doc3' },
    { name: 'Tute 4', year: 2026, link: 'https://example.com/doc4' }
  ];
}
