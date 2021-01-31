import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Coupon } from 'src/app/models/coupon';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  public coupouns: Coupon[] = [];
  constructor(private adminService:AdminService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.adminService.getAllCoup().subscribe((coupouns)=>{this.coupouns=coupouns},
    (err)=>{alert(err.message)}); 
  
  }
  deleteCustomer(): void{
    this.dialog.open(AddCustomerComponent);
    }

}
