import { Component, Input } from '@angular/core';
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
  obj:any

  @Input() data: any;
user:any;
  ngOnInit(){  
    console.log('data',this.data);
    
    this.userData.empData.subscribe({
      next: (v: any) => {                
        this.user = Object.assign({},v);        
        this.postFormData.patchValue(this.user.data)
      }
    })
  }

  handleAdd(){
    this.userData.add(this.postFormData.value)    
  }

  handleUpdate(){
    this.obj = this.postFormData.value
    console.log(this.postFormData.value);
    
    this.userData.data.data.forEach((e) => {      
      if (this.obj.id === e.id) {
        Object.assign(e, this.obj );
      }
    });
    
    // this.userData.handle(this.postFormData.value)
    
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
