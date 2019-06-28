import { Component, OnInit } from '@angular/core';
import {Auth0Service} from '../auth0/auth0.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(private authService: Auth0Service) {}

  ngOnInit() {
    this.authService.profile.subscribe(profile => (this.profile = profile));
  }

}
