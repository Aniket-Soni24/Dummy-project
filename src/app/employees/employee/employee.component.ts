import { Component } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  console = console;
  user: any;

  constructor(private userData: UsersDataService) { }

  ngOnInit() {
    this.user = this.userData.users();

    this.userData.subject.subscribe({
      next: (v) => {               
        this.user = Object.assign([], v.data);
      }
    });

    this.userData.delete.subscribe({
      next: (v) => {     
        console.log(v);     
        this.user = Object.assign([], v);
      }
    });
  }

  handleEdit(obj: any) {
    this.userData.handleEdit(obj)
  }

  handleDelete(id:any){
    this.userData.handleDelete(id)
  }
}