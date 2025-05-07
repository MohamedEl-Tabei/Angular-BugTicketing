import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TAccount } from '../../Types/TAccount';
import { AccountService } from '../../Services/account.service';

@Component({
  selector: 'app-navbar',
  imports: [LogoComponent, RouterLinkActive, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  pages = ['home', 'notfound'];
  account: TAccount = {
    token: '',
    userName: '',
  };
  constructor(private accountServices: AccountService) {}
  ngOnInit() {
    this.accountServices.onAccountChanged.subscribe((a) => (this.account = a));
  }
}
