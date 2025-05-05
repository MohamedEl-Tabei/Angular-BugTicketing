import { Injectable } from '@angular/core';
import { TLoginRequest } from '../Types/TLoginRequest';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  loginRequest = (status: TLoginRequest) => {
    console.log(status);
  };
}
