import { Injectable } from '@angular/core';
import { LoginService } from '../../app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  public constructor(private loginService: LoginService) {}

 public getToken(): string {

  return this.loginService.token;
 }
  

}
