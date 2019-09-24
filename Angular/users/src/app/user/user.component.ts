import { Component, OnInit } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  ngOnInit() {
  }


  // propName: type = defaultValue
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  newUser: string = '';
  currentYear: number = 2019;

  newUserAdded: boolean = false;

  // Array to hold Mountain Objects
  users: User[] = [];
  constructor() { console.log(this.users) }

  // executed when Add User is clicked
  onAddUser(): void {
    this.users.push(new User(this.firstName, this.lastName, this.email));
    this.newUserAdded = true;
  }

  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    //this.newUserAdded = false;
  }


  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }

  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }





}
