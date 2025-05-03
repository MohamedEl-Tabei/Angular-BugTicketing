import { Component } from '@angular/core';
import { TRegisterRequest } from '../../Types/user';
import { LogoComponent } from '../../Components/logo/logo.component';

@Component({
  selector: 'app-register',
  imports: [LogoComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerData: TRegisterRequest = {
    email: '',
    password: '',
    role: [],
    userName: '',
  };
  roles = ['Manager', 'Tester', 'Developer'];
}
