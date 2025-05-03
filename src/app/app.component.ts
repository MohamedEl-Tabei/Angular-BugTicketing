import { Component } from '@angular/core';
import { TestComponent } from './Pages/test/test.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TestComponent, NavbarComponent],
})
export class AppComponent {
  title = 'Bug Ticketing';
}
