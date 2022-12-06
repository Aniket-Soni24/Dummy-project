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
   editEntries : any;
   handleDelete(id:JSON){
    console.log("edit");
    this.editEntries = this.userData.data.data;
    
    let index = this.userData.data.data.findIndex(e => e.id === Number(id));
  
        this.user.splice(index,1)
        console.log(this.user);
        
      
  }

}
