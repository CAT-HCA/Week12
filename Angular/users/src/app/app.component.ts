import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Users';

  // propName: type = defaultValue
  firstName: string = 'Foo';
  lastName: string = 'Bar';
  email: string = 'foobar@test.com';
  currentYear: number = 2019;

  addNewUser: boolean = true;

  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }
}
