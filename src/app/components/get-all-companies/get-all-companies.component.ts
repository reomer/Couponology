import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from '../../models/company';
import { MatDialog } from '@angular/material/dialog';
import { AddCompanyComponent } from '../add-company/add-company.component';
import { UpdateCompanyComponent } from '../update-company/update-company.component';


@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {
  
  public companies: Company[]=[];
  public constructor(private adminService: AdminService, public dialog:MatDialog) { }

  ngOnInit(): void {

    this.adminService.getAllCompanies().subscribe(
      (companies) => { this.companies = companies },
      (err) => { alert(err.message)});
  }


  addCompany(): void{
    this.dialog.open(AddCompanyComponent);
    }

    //change delete
    deleteCompany(id: number): void{
    this.adminService.deleteCustomer     }
    updateCompany(): void{
      this.dialog.open(UpdateCompanyComponent);
      }
}
