import { Component , Output , EventEmitter} from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { EmpData } from 'src/app/types';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  data:string = 'aniket'

  user: any;
  @Output() empData = new EventEmitter<any>();

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

  handleDelete(id:any){
    this.userData.handleDelete(id)
  }

  editableData(data:EmpData){
    this.empData.emit(data)        
  }

}