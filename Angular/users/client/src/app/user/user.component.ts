import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/user.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // Array to hold User Objects
  users: any[] = [];
  newUserAdded: boolean = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    // call getUsers() method in userService
    this.userService.getUsers().subscribe((data) => {
      this.users = data.users;

    });
    
    }


  // propName: type = defaultValue
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  newUser: string = '';
  currentYear: number = 2019;




  // executed when Add User is clicked
  onAddUser(): void {
    this.users = this.userService.addUser(this.firstName, this.lastName, this.email);
    this.newUserAdded = true;

  }

  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    //this.newUserAdded = false;
  }
  // executed when the Reset button is clicked
  onLogout(): void {
    this.router.navigate(['/']);
  }




  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }

  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }



}
