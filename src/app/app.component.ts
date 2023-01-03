import { Component } from '@angular/core';
import { UserdataService } from './userdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Apiproject';
  public lstdetails:any
  constructor (private userdata:UserdataService) {
    userdata.users()
    .subscribe (data => {
      this.lstdetails = data;
    })
    }
    getUsersData(data:any) {
      console.log(data)
      this.userdata.save(data).subscribe (result => {
        console.log(result);
        
      })
    }

  }
  



