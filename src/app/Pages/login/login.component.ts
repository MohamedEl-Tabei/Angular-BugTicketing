import { Component } from '@angular/core';
import { TLoginRequest } from '../../Types/TLoginRequest';
import { LogoComponent } from '../../Components/logo/logo.component';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-login',
  imports: [LogoComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginData: TLoginRequest = {
    email: '',
    password: '',
    rememberme: false,
  };
  hidePassword = true;

  constructor(private authenticationService: AuthenticationService) {}

  onEye = () => (this.hidePassword = !this.hidePassword);
  onLogin = (event: Event) => {
    event.preventDefault();
    this.authenticationService.loginRequest(this.loginData);
  };
  onInputData = (event: Event) => {
    var currentTarget = event.currentTarget as HTMLInputElement;
    var id = currentTarget.id;
    var value = currentTarget.value;
    if (id == 'password') this.loginData.password = value;
    if (id == 'email') this.loginData.email = value;
  };
  onRememberme = () => (this.loginData.rememberme = !this.loginData.rememberme);
}
