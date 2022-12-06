import { Component } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { Observable } from 'rxjs';

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
    console.log('iuefuef',this.user);
    
    
    this.userData.subject.subscribe({
    next: (v:any) => {
      this.user = Object.assign([],v);
      console.log("v", v);
      
    }
  });
    console.log("user",this.user);
    
   }
   handleEdit(e:any){
    console.log("edit");
  }
}
