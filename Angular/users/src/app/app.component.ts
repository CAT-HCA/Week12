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

  addNewUsers: boolean = true;

  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.addNewUsers = false;
  }


  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }


  // executed when Add Mountain is clicked
  onAddUser(): void {
    this.newUser = `${this.firstName} - ${this.lastName}': ${this.email}`;
    this.addNewUsers = true;
  }
}
