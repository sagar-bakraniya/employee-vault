import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { AddEventComponent } from '../add-event/add-event.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
