import { Component } from '@angular/core';
import { Validators, FormControl,FormGroup} from '@angular/forms'
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  constructor(private userData:UsersDataService){}

  postFormData = new FormGroup({
    id : new FormControl('',[Validators.required,Validators.pattern('^[0-9]')]),
    employee_name : new FormControl('',[Validators.required]),
    employee_salary : new FormControl('',[Validators.required]),
    employee_age : new FormControl('',[Validators.required]) 
  })

user:any;
  ngOnInit(){
    this.userData.editDetails.subscribe({
      next: (v: any) => {
        this.user = Object.assign({}, v);
        this.postFormData.patchValue(this.user[0])
      }
    })

    this.userData.delete.subscribe(
      {
        next: (v: any) => {
          this.user = Object.assign({}, v);
        }
      }
    )
  }

  handleAdd(){
    this.userData.add(this.postFormData.value)    
  }

  loginUser(){

  }

  get id(){
    return this.postFormData.get('id')
  }

  get employee_name(){
    return this.postFormData.get('employee_name')
  }

  get employee_salary(){
    return this.postFormData.get('employee_salary')
  }

  get employee_age(){
    return this.postFormData.get('employee_age')
  }

}
