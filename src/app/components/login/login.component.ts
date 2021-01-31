import { Router } from '@angular/router';
import { LoginResult } from '../../models/loginResult';
import { LoginService } from '../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/credentials';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credenials = new Credentials();
  public constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public loginToServer(): void {
    this.loginService.loginRequest(this.credenials).subscribe(
      (loginResult) => {
        sessionStorage.setItem('Coupon-System-Headers',loginResult.token)
        alert( 'Welcome to The Coupon System  - You logged in as: ' + loginResult.type +'  Here Is your Key: ' + loginResult.token );
        this.loginService.token = loginResult.token;
        this.loginService.type = loginResult.type;
        this.loginService.isLoggedIn = true;

        this.router.navigateByUrl(this.loginService.type);



      },
      (err) => { console.log(err) });
  }


}
