// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Auth0Service } from './auth0/auth0.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate  {
//   constructor(private authService: Auth0Service, private router: Router) {}

//   async canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Promise<boolean | UrlTree> {
//     const client = await this.authService.getAuth0Client();
//     const isAuthenticated = await client.isAuthenticated();

//     if (isAuthenticated) {
//       return true;
//     }

//     client.loginWithRedirect({

//       appState: { target: state.url }
      
//     });

//     return false;
//   }
  
// }
