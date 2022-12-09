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
        this.user = Object.assign([], v);
      }
    });
  }

  handleEdit(id: any) {
    this.userData.handleEdit(id)
    this.handleDelete(id)
  }

  handleDelete(id: any) {
    let index = this.userData.data.data.findIndex(e => e.id == id);
    this.userData.data.data.splice(index, 1)
    // this.userData.deleteId(id)
  }
}
