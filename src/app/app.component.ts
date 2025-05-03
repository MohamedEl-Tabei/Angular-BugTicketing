import { Component } from '@angular/core';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavbarComponent],
})
export class AppComponent {
  title = 'Bug Ticketing';
}
