import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersArray: User[] = [];

  constructor() {
  }

  getUsersFromDB(): void {
    this.usersArray = JSON.parse(localStorage.getItem("BD") || '[]');
  }

  getUsers() {
    return this.usersArray;
  }

  createUser(user: User): void {
    user.id = `${new Date().getTime()}`;
		const users = this.usersArray;
    users.push(user);
    localStorage.setItem("BD", JSON.stringify(users));
  }

}
