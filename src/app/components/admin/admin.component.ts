import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../services/admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { from } from 'rxjs';
import {Company} from '../../models/company';
import {Customer} from '../../models/customer';
 import { MatDialog } from '@angular/material/dialog';
 import { AddCompanyComponent } from '../../components/add-company/add-company.component';
 import { AddCustomerComponent } from '../../components/add-customer/add-customer.component';
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
      
// companies:Company[]=[];
// displayedColumnsCompany: string[] = ['id', 'name', 'email', 'password'];
// dataSourceCompany = new MatTableDataSource(this.companies);

// customers:Customer[]=[];
// displayedColumnsCustomer: string[] = ['id', 'firstName','lastName', 'email', 'password'];
// dataSourceCustomer = new MatTableDataSource(this.customers);

// applyFilterCompany(event: Event) {
//   const filterValue = (event.target as HTMLInputElement).value;
//   this.dataSourceCompany.filter = filterValue.trim().toLowerCase();
// }
// applyFilterCustomer(event: Event) {
//   const filterValue = (event.target as HTMLInputElement).value;
//   this.dataSourceCustomer.filter = filterValue.trim().toLowerCase();
// }


//  constructor(private adminService:AdminService,public dialog: MatDialog) {



// }
// addCompany(): void{
// this.dialog.open(AddCompanyComponent);
// }
// addCustomer():void{
// this.dialog.open(AddCustomerComponent);
// }
// ngOnInit(): void {
// this.adminService.getAllCompanies().subscribe(
//  (res)=>{console.log(res);
// this.companies=res;
// console.log(this.dataSourceCompany.data=this.companies);

// },
//  (err)=>{console.log(err);}
// );

// this.adminService.getAllCustomers().subscribe(
// (res)=>{console.log(res);
// this.customers=res;
// console.log(this.dataSourceCustomer.data=this.customers);}
// )
// }

// }

  typesOfActions: string[] = ['addCompany', 'getAllCompanies',
  'addCustomer','getAllCustomers'];


    public companies: any;
  public constructor(private adminService: AdminService) { }

  ngOnInit(): void {

    

  }
}
