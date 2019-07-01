import { Injectable } from '@angular/core';
import { Auth0Service } from './auth0/auth0.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private authService: Auth0Service,
    private httpClient: HttpClient
  ) {}

  async ping(): Promise<any> {
    const client = await this.authService.getAuth0Client();
    const token = await client.getTokenSilently();

    return this.httpClient
      .get('https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1.1', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .toPromise();
  }
}
