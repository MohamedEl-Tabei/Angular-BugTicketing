import { EventEmitter, Injectable } from '@angular/core';
import { TAccount } from '../Types/TAccount';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  onAccountChanged = new EventEmitter<TAccount>();
}
