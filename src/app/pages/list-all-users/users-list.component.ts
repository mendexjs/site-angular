import { Component, OnInit } from '@angular/core';
import{ User } from '../../models/user.model';
import {Router} from "@angular/router";
import {UserService} from "../../services/usuario.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'cpf', 'userAge'];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users = this.userService.getUsers().map(user => new User(user.id, user.name, user.cpf, user.birthDay));
  }

  createUser() {
    this.router.navigateByUrl('users/new')
  }
}
