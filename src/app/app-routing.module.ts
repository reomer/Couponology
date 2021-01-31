import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import {AdminGuardService} from './services/admin-guard.service';
import {CompanyGuardService} from './services/company-guard.service';
import {CustomerGuardService} from './services/customer-guard.service';




const routes: Routes = [
 {path: 'admin',component:AdminComponent,canActivate: [AdminGuardService]},
 {path: 'company',component:CompanyComponent,canActivate: [CompanyGuardService]},
 {path: 'customer',component:CustomerComponent,canActivate: [CustomerGuardService]},
  // {path: 'admin',component:AdminComponent},
  // {path: 'customer',component:CustomerComponent},
  // {path: 'company',component:CompanyComponent},
  {path: 'login', component:LoginComponent},
  {path: 'logout', component:LoginComponent,canActivate: [AdminGuardService]},
  {path: '',component:AdminComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})
export class AppRoutingModule { }
