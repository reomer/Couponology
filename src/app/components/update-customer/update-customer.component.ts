import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  public id?:number
  public firstName?:string
  public lastName?:string
  public email?:string
  public password?:string
  public customer: Customer = new Customer();

    constructor(private adminService: AdminService) { }
  
    ngOnInit(): void {
    
         this.adminService.getOneCustomer(3).subscribe(
             (customer)=>{console.log(this.customer=customer);},
             
             (err)=>{console.log(err);}
         ); 
      
    }
    updateCustomer(){
      const customer: Customer = new Customer(this.id,this.firstName,this.lastName,this.email,this.password,null)
       this.adminService.updateCustomer(customer).subscribe(
           (res)=>{console.log(res);},
           
           (err)=>{console.log(err);}
       ); 
    
  }
  }
