import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../auth0/auth0.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback-component',
  templateUrl: './callback-component.component.html',
  styleUrls: ['./callback-component.component.scss']
})

export class CallbackComponentComponent implements OnInit {

  constructor(private authService: Auth0Service, private router: Router) {}

  async ngOnInit() {
    const client = await this.authService.getAuth0Client();

    // Handle the redirect from Auth0
    const result = await client.handleRedirectCallback();
    
    // Get the URL the user was originally trying to reach
    const targetRoute =
      result.appState && result.appState.target ? result.appState.target : '';

    // Update observables
    this.authService.isAuthenticated.next(await client.isAuthenticated());
    this.authService.profile.next(await client.getUser())
    localStorage.setItem('authorization', await client.getTokenSilently());

    // Redirect away
    this.router.navigate([targetRoute]);
  }
  
}
