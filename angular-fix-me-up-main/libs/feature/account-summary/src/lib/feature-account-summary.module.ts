import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountSummaryRoutingModule } from './account-summary-routing.module';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [CommonModule, NgxPaginationModule, AccountSummaryRoutingModule, FormsModule],
  declarations: [AccountSummaryComponent],
  exports: [AccountSummaryComponent],
})
export class FeatureAccountSummaryModule {}
