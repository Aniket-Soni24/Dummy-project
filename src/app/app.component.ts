import { Component} from '@angular/core';
import { EmpData } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dummy';
  data: EmpData | undefined;  
  
  empData(data: EmpData) {
    this.data = data;
  }
}
