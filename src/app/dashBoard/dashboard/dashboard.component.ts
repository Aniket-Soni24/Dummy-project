import { Component } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

constructor(private userData : UsersDataService){}

ngOnInit(){
// this.userData.dataEmitter.subscribe((value)=>{
//    this.inputText = value
// })
}

  inputText : any;
}
