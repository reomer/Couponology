import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials';
import { Observable } from 'rxjs';
import { LoginResult } from '../models/loginResult';
import { UrlService } from '../services/url.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public token: string;
  public type: string;
  public isLoggedIn = false;

  
  public constructor(private httpClient: HttpClient, private urlService: UrlService) {}

  public loginRequest(credentials: Credentials): Observable<LoginResult>{


    const correctURL = (`${this.urlService.getURL((credentials.type).toLowerCase())}/login?email=${credentials.email}&password=${credentials.password}`);
    console.log(correctURL);
    
    return this.httpClient.post(correctURL, null);
  }
}
