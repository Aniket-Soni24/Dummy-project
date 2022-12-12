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
  }

  handleEdit(obj: any) {
    this.userData.handleEdit(obj)
  }

  handleDelete(id: any) {// move in service and add filter 
    let index = this.userData.data.data.findIndex(e => e.id == id);
    this.userData.data.data.splice(index, 1)
  }
}