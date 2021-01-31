import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { AdminService } from '../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import {UpdateCustomerComponent} from '../update-customer/update-customer.component';
@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  public customers: Customer[]=[];
  public constructor(private adminService: AdminService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe((customers)=>{this.customers=customers},
    (err)=>{alert(err.message)}); 
  }

  addCustomer(): void{
    this.dialog.open(AddCustomerComponent);
    }
//change delete
deleteCustomer(): void{
  this.dialog.open(AddCustomerComponent);
  }
    updateCustomer(): void{
      this.dialog.open(UpdateCustomerComponent);
      }
}
