import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '@angular-anim/shared/models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts: Account[] = [
    { id: 1234, balance: 7500, currency: "cad" },
    { id: 1235, balance: 4500, currency: "cad" },
    { id: 1236, balance: 2102, currency: "usd" },
    { id: 1237, balance: 4855, currency: "usd" },
    { id: 1238, balance: 9184, currency: "usd" },
    { id: 1239, balance: 7284, currency: "usd" },
    { id: 1240, balance: 9834, currency: "usd" },
    { id: 1241, balance: 6184, currency: "usd" },
    { id: 1242, balance: 5284, currency: "usd" },
    { id: 1243, balance: 7426, currency: "usd" },
    { id: 1244, balance: 9347, currency: "usd" },
    { id: 1245, balance: 6284, currency: "usd" },
    { id: 1246, balance: 1245, currency: "usd" },
  ];


  accountInvalid: Account = { id: -1, balance: -1, currency: "Not Available" }

  load(): Observable<Account[]> {
    return of(this.accounts);
  }

  getAccountDetail(getInputedNumberbyUser: number): Observable<Account>{
    for (let i = 0; i < this.accounts.length; i++)
    {
      if (this.accounts[i].id === getInputedNumberbyUser) {
        return of(this.accounts[i]);
      }
    }
    return of(this.accountInvalid);
  }
}
  

