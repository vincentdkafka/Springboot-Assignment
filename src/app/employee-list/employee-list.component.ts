import { Component } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  
  employees: Employee[] = []; 

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();


    this.route.url.subscribe(() => {
      this.getEmployees();
    });
  }


  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
      
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }


   updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);

  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    });


  }


}
