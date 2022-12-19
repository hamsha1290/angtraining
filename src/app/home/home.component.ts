import { Component } from '@angular/core';
import { Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userServices : UsersService) {

  }

  userDetails : Users = this.userServices.getUserDetails();
  fullName = this.userDetails.name;
  id = this.userDetails.id;
  userName = this.userDetails.username;
  phone = this.userDetails.phone;
  website = this.userDetails.website;
  email = this.userDetails.email;

}
