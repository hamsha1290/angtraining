import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  displayedColumns = ["id","username","name","email","phone","website"];

  records : any;
  constructor(private usersService : UsersService) {

  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((records) => {
      this.records = records;})
  }

}
