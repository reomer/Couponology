import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../../src/app/models/customer';
import { TokenManagerService } from './token-manager.service';
import { Company } from '../models/company';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public constructor(private httpClient: HttpClient, private tokenManagerService: TokenManagerService) { }

  public getAllCoupons(): Observable<Coupon[]> {
    const headers = new HttpHeaders({ 'Coupon-System-Headers': sessionStorage.getItem('Coupon-System-Headers')});
    const options = { headers: headers };
    return this.httpClient.get<Coupon[]>("http://localhost:8090/company/get-company-coupons", options);
  }

  public deleteCoupon(coupon:Coupon): Observable<Coupon> {
    const headers = new HttpHeaders(
      { 'Coupon-System-Headers':sessionStorage.getItem('Coupon-System-Headers') ,
        'Access-Control-Allow-Origin': '*'}
      );
    //const body = JSON.stringify(customer);
    //console.log(body);
    const options = { headers };

    return this.httpClient.delete<any>('http://localhost:8090/company/delete', options);
  }
}
