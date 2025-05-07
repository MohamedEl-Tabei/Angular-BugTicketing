import { Injectable } from '@angular/core';
import { TLoginRequest } from '../Types/TLoginRequest';
import { HttpClient } from '@angular/common/http';
import { constants } from '../Constants';
import { Observable } from 'rxjs';
import { TAccount } from '../Types/TAccount';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url = `${constants.url}users/`;
  constructor(private http: HttpClient) {}

  loginRequest = (loginData: TLoginRequest): Observable<TAccount> => {
    return this.http.post<TAccount>(`${this.url}login`, loginData);
  };
}
