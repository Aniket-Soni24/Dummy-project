import { Component } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  console = console;
  user:any;
  constructor(private userData:UsersDataService){  }

  ngOnInit(){
    this.user = this.userData.users();
      this.userData.subject.subscribe({
      next: (v:any) => {
        this.user = v;
      }
    });
   }
   handleEdit(e:any){
    console.log("edit");
  }
}