import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  constructor(private userData:UsersDataService,private fb : FormBuilder){}

  postFormData = this.fb.group({
   id:['',[Validators.required]],
   employee_name:['',[Validators.required,Validators.minLength(3)]],
   employee_salary:[''],
   employee_age:[''],
   profile_image:['']
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

}
