import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

 
  public constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
   
  }

  public showLogOutDialog(): void {
    if (confirm('Are you sure you want to logout?')) {
      this.loginService.token = '';
      this.loginService.type = '';
      this.loginService.isLoggedIn = false;
      this.router.navigateByUrl('login');
    }

  }

  public isLoggedIn():boolean{
    return this.loginService.isLoggedIn;
  }

}
