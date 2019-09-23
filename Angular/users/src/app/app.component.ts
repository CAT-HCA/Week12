import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add a User';

  // propName: type = defaultValue
  firstName: string = 'Foo';
  lastName: string = 'Bar';
  email: string = 'foobar@test.com';
  newUser: string = '';
  currentYear: number = 2019;

  newUserAdded: boolean = false;

  users: Array<object> = [];

  // executed when Add User is clicked
  onAddUser(): void {
    this.users.push({"firstName": this.firstName, "lastName": this.lastName, "email": this.email});
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
