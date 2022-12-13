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
    id : new FormControl('',[Validators.required]),
    employee_name : new FormControl('',[Validators.required]),
    employee_salary : new FormControl('',[Validators.required]),
    employee_age : new FormControl('',[Validators.required]) ,
  })

user:any;
  ngOnInit(){
    console.warn(this.userData.subject);
    
    this.userData.empData.subscribe({//touched
      next: (v: any) => {    
        console.log('patch value in form ',v.type);
            
        this.user = Object.assign({},v);        
        this.postFormData.patchValue(this.user.data)
      }
    })
  }

  handleAdd(){
    console.log('handle add triggered');
    this.userData.add(this.postFormData.value)    
  }

  handleUpdate(){
    console.log('handle update triggered');
    this.userData.handle(this.postFormData.value)
    this.postFormData.patchValue({
      id:'',
      employee_name:'',
      employee_salary:'',
      employee_age:'',
    })
    
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
