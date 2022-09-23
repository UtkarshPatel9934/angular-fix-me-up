import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSummaryComponent } from '@angular-anim/feature/account-summary';
import { AboutComponent } from './about/about.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';


// TODO: 2. We've setup these routes and have them on the page but they aren't working

/* Redefined the routes and fix the undefined or unnamed routes, by creating new component */
const routes: Routes = [
  { path: '', component: AccountSummaryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account/:id', component: AccountDetailsComponent },
  { path: 'invalidRoute', component: InvalidRouteComponent },
  { path: '**', component: InvalidRouteComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }