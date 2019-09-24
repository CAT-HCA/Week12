import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = []

  constructor() { }

  addUser(firstName: string, lastName: string, email: string): Array<any> {
    this.users.push(new User(firstName, lastName, email))
    return this.users;
  }
}

