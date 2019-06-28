import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Auth0Service } from './auth0/auth0.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<app-navbar></app-navbar>,<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
