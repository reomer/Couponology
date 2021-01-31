import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompanyGuardService implements CanActivate {

  public constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.type === 'company') {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
}
