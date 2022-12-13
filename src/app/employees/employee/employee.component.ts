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
        console.log("v in  user", v.data);
                   
        this.user = Object.assign([], v.data);
      }
    });

    this.userData.subject.subscribe({
      next: (v) => {     
        console.log('delete in employye',v);     
        this.user = Object.assign([], v.data);
      }
    });
  }

  handleEdit(obj: any) {
    console.log('handle edit triggered');
    this.userData.handleEdit(obj)
  }

  handleDelete(id:any){
    console.log('handle delete triggered');
    
    this.userData.handleDelete(id)
  }
}