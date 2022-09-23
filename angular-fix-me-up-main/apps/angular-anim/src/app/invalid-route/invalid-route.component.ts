import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-anim-invalid-route',
  templateUrl: './invalid-route.component.html',
  styleUrls: ['./invalid-route.component.scss'],
})
export class InvalidRouteComponent {

  constructor(private router: Router) {}

  redirectHome()
  {
    this.router.navigate(['/'])
  }


}


