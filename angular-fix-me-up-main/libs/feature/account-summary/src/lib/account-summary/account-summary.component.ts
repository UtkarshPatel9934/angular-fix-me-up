/* eslint-disable @typescript-eslint/no-inferrable-types */
/** 
 * TODO: 10. Asynchronous Programming (RxJS)
 * TODO: 13. Angular (NX) Architecture
*/
import { Component, OnInit } from '@angular/core';
import { Account } from '@angular-anim/shared/models';
import { AccountService } from '@angular-anim/shared/services';




@Component({
  selector: 'sum-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit{

  

  
  accountsFilter: string;
  
  accounts$ = this.accountService.load();
  accounts: Account[] = [];
    
  filteredResponse: Account[] = [];

  
  // for ngx-pagination
  totalLength: number | undefined;
  page: number = 1;
  // for ngx-pagination


  

  constructor(private accountService: AccountService) {
    this.accountsFilter = '' 
  }

  ngOnInit(): void {
    this.storeData();
  }

  async storeData() {
    setTimeout( 
      () => {
        this.accounts$.subscribe( acc => {
          this.accounts = acc;
        } )
      }, 900
     )
  }


  filterAccounts(filterTestingString?: string): Account[]{

    /* RUN : Only for Testing Purpose: */
    if(filterTestingString !== undefined)
    {
      this.accounts$.subscribe( acc => {
        this.accounts = acc
        this.totalLength = acc.length
      } )
      this.filteredResponse = this.accounts.filter(acc => acc.currency === filterTestingString  || filterTestingString  === '')
      return this.filteredResponse;
    }
    /* RUN : Only for Testing Purpose: */

    this.page = 1
    this.filteredResponse = this.accounts.filter(acc => acc.currency === this.accountsFilter  || this.accountsFilter  === '')
    return this.filteredResponse;
  }
  
}