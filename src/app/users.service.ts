import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : Users = new Users('','','','','','');

  validUserId = false;

  constructor(private httpClient : HttpClient) { }

  getUsers() {
    const headers = new HttpHeaders({'content-type' : 'application/json' });
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users',{headers})
    .pipe(map((res) => res));
  }

  setUserDetails(fullname : string, username : string, id : string, phone : string, website : string, email : string) {
    this.users.name = fullname;
    this.users.username = username;
    this.users.id = id;
    this.users.phone = phone;
    this.users.website = website;
    this.users.email = email;
  }

  getUserDetails() {
    return this.users;
  }
}
