import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '@angular-anim/shared/models';
import { AccountService } from '@angular-anim/shared/services';


@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent implements OnInit {

  id?: number;

  accountDetails: Account | undefined

  constructor(private accountService: AccountService, private router: Router,
    private route: ActivatedRoute){
      
    }

    ngOnInit(): void {
      
      this.route.paramMap.subscribe(params => {
        this.id = + (params.get('id') ?? 0);
        
        this.accountService.getAccountDetail( this.id ).subscribe( acc => {
          if(acc.id !== -1)
          {
            this.accountDetails = acc
          }
          else
          {
            this.router.navigate(['/invalidAccount'])
          }
        } )
      })
    }
}
