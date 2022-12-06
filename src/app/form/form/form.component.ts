import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms'
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  //  postDataForm = new FormGroup({
  //    id: new FormControl(''),
  //    employee_name: new FormControl('',[Validators.required,Validators.minLength(3)]),
  //    employee_salary: new FormControl('',[Validators.required]),
  //    employee_age: new FormControl('',[Validators.required])
  //  });
  constructor(private userData:UsersDataService,private fb : FormBuilder){}

  postFormData = this.fb.group({
   id:['',[Validators.required]],
   employee_name:['',[Validators.required,Validators.minLength(3)]],
   employee_salary:[''],
   employee_age:['']
  })
  // ngOnInit(){
    
  // }
  handleAdd(){
    // console.log("submitted");
    this.userData.add(this.postFormData.value)    
  }
 
}
