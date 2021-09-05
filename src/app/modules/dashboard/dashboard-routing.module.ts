import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { AddEventComponent } from '../add-event/add-event.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: EmployeeListComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'add-employee',
        component: AddEmployeeComponent
      }, 
      {
        path: 'add-event',
        component: AddEventComponent
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
