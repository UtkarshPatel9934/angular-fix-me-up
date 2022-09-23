import { Component, Input, OnInit } from '@angular/core';
import { SideNavItem } from '../models/side-nav';
import * as $ from 'jquery';


@Component({
  selector: 'pre-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Input() sideNavItems: SideNavItem[] = [];

 ngOnInit(): void {
   $(document).ready(function() {
     $(".fa").on("click",function(){
       $('.myLinks').stop().slideToggle(1000);
     });
   });
}
}
