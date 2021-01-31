import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ComponentsComponent } from './components/components.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { from } from 'rxjs';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';
import { PurchaseCouponComponent } from './components/purchase-coupon/purchase-coupon.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { GetCustomerCouponsComponent } from './components/get-customer-coupons/get-customer-coupons.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    LoginComponent,
    LogoutComponent,
    ToolbarComponent,
    GetAllCustomersComponent,
    AddCompanyComponent,
    AddCustomerComponent,
    GetAllCompaniesComponent,
    UpdateCompanyComponent,
    UpdateCustomerComponent,
    GetAllCouponsComponent,
    PurchaseCouponComponent,
    AddCouponComponent,
    GetCustomerCouponsComponent,
    UpdateCouponComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
