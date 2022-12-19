import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersService } from '../users.service';
import { Users } from '../users.model';
import { Router, Routes } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private usersService : UsersService) {};

  records : any;
  username:string = '';
  password:string = '';
  validUser = false;
  msg : string = '';

  ngOnInit () {
    this.usersService.getUsers().subscribe((records) => {
      this.records = records;
     });
  }

  onLogin(form : NgForm) {
    for (var i of this.records) {
      if ( form.value.username === i.username) {
        this.validUser = true;
        this.usersService.setUserDetails(i.name,i.username,i.id,i.phone,i.website,i.email);
        this.usersService.validUserId = true;
        break;
      };
    }
    if (this.validUser) {
      this.router.navigate(['/home']);
    }
    else {
      this.msg = 'Invalid Credentials!!!'
    }

}
}
