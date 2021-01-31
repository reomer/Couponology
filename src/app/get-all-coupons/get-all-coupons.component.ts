import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { AdminService } from 'src/app/services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {
  public coupon: Coupon;
  public coupons: Coupon[]=[];
  public constructor(private companyService: CompanyService, public dialog:MatDialog) { }


  ngOnInit(): void {
    
    this.companyService.getAllCoupons().subscribe(
      (coupons) => { this.coupons = coupons },
      (err) => { alert(err.message)});
    }
    
public deleteCoupon(couponIn:Coupon): void{
  this.companyService.deleteCoupon(couponIn).subscribe(
    (coupon) => { this.coupon = couponIn },
    (err) => { alert(err.message)});
}

  }


