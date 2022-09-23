import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FeaturePresentationalModule } from '@angular-anim/shared/presentational';
import { AboutComponent } from './about/about.component';

import { SharedStoreModule } from '@angular-anim/shared/store';
import { StoreModule } from '@ngrx/store';

import { FeatureAccountSummaryModule } from '@angular-anim/feature/account-summary';




@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FeaturePresentationalModule,
    FeatureAccountSummaryModule,
    SharedStoreModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
