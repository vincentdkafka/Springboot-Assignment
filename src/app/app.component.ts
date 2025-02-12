
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [EmployeeListComponent, RouterOutlet, RouterModule] 
})
export class AppComponent { 
  title = 'Anggular and Bootstrap Assignment';
}

