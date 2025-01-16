import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-logged-in',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-logged-in.component.html',
  styleUrl: './not-logged-in.component.css'
})
export class NotLoggedInComponent {

}
