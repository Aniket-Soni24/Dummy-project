import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashBoard/dashboard/dashboard.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { FormComponent } from './form/form/form.component';

const routes: Routes = [
  {path:'employees' ,component: EmployeeComponent},
  {path:'form' ,component: FormComponent},
  {path:'dashboard' ,component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
