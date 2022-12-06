import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms'
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

   postDataForm = new FormGroup({
     Id: new FormControl(''),
     employee_Name: new FormControl(''),
     employee_Salary: new FormControl(''),
     employee_Age: new FormControl('')
   });
  constructor(private userData:UsersDataService){}
  ngOnInit(){
    
  }
  handleAdd(){
    console.log("submitted");
    this.userData.add(this.postDataForm)
  }
 
}
