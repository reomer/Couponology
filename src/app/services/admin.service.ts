import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Customer } from '../models/customer';
import { HttpHeaders } from '@angular/common/http';
import { TokenManagerService } from '../services/token-manager.service';
import { Coupon } from '../models/coupon';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
 

  public constructor(private httpClient: HttpClient, private tokenManagerService: TokenManagerService) { }

  public getAllCompanies(): Observable<Company[]> {
    const headers = new HttpHeaders({ 'Coupon-System-Headers': sessionStorage.getItem('Coupon-System-Headers')});
    const options = { headers: headers };
    return this.httpClient.get<Company[]>("http://localhost:8090/admin/get-all-companies", options);
  }

  public getAllCoup(): Observable<Coupon[]> {
    const headers = new HttpHeaders({ 'Coupon-System-Headers': sessionStorage.getItem('Coupon-System-Headers')});
    const options = { headers: headers };
    return this.httpClient.get<Coupon[]>("http://localhost:8090/admin/get-all-coupons", options);
  }

  public getAllCustomers(): Observable<Customer[]> {
    const headers = new HttpHeaders({ 'Coupon-System-Headers':sessionStorage.getItem('Coupon-System-Headers')});
    const options = { headers: headers };
    return this.httpClient.get<Customer[]>('http://localhost:8090/admin/get-all-customers', options);
  }

  public getOneCustomer(customerID: number): Observable<Customer> {
    const headers = new HttpHeaders({ 'Coupon-System-Headers':sessionStorage.getItem('Coupon-System-Headers')});
    const options = { headers: headers };
    return this.httpClient.get<Customer>('http://localhost:8090/admin/get-one-customer?customerId=2' ,options);
  }
  public getOneCompany(companyID: number): Observable<Company> {
    const headers = new HttpHeaders({ 'Coupon-System-Headers': sessionStorage.getItem('Coupon-System-Headers')});
    const options = { headers: headers };
    return this.httpClient.get('http://localhost:8090/admin/get-one-company?id=2', options);
  }

  addCompany(company: Company): Observable<any>{
    const headers = new HttpHeaders({ 'Coupon-System-Headers':sessionStorage.getItem('Coupon-System-Headers'),
    'Access-Control-Allow-Origin': '*'});
    const options = { headers: headers };
    return this.httpClient.post("http://localhost:8090/admin/addCompany",company,options);
    }
  public addCustomer(customer: Customer): Observable<any> {

    const headers = new HttpHeaders(
      { 'Coupon-System-Headers':sessionStorage.getItem('Coupon-System-Headers') ,
        'Access-Control-Allow-Origin': '*'}
      );

    const couponsArr = [];
    if (customer.coupons !== undefined){
      customer.coupons.forEach(element => {
        couponsArr.push(element);
     });
    }
    const body = {first_name: customer.firstName, last_name: customer.lastName,
      password: customer.password, coupons: couponsArr };
    console.log(body);
    const options = { headers, withCredentials: true};
    return this.httpClient.post<any>('http://localhost:8090/admin/add-customer', customer, options);
  }

  public deleteCompany(companyId: number): Observable<any> {
    const headers = new HttpHeaders(
      { 'Coupon-System-Headers':sessionStorage.getItem('Coupon-System-Headers') ,
        'Access-Control-Allow-Origin': '*'}
      );
    //const body = JSON.stringify(customer);
    //console.log(body);
    const options = { headers };

    return this.httpClient.delete<any>('http://localhost:8080/admin/delete-customer/?id=' + companyId + '/', options);
  }

  public deleteCustomer(customerId: number): Observable<any> {
    const headers = new HttpHeaders(
      { 'Coupon-System-Headers':sessionStorage.getItem('Coupon-System-Headers') ,
        'Access-Control-Allow-Origin': '*'}
      );
    //const body = JSON.stringify(customer);
    //console.log(body);
    const options = { headers };

    return this.httpClient.delete<any>('http://localhost:8090/admin/delete-customer/?customerId='+customerId + '/', options);
  }

  public updateCustomer(customer: Customer): Observable<any> {
    // return this.httpClient.get<Customer[]>('../../../assets/json/customers.json', {headers: this.getHeaders(), withCredentials: true });
    const headers = new HttpHeaders({ 'Coupon-System-Headers': sessionStorage.getItem('Coupon-System-Headers')});
    const options = { headers: headers };
    return this.httpClient.put("http://localhost:8090/admin/update-customer",customer, options);
  }
}
