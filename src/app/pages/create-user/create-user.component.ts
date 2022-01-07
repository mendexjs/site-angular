import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/usuario.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {


  newUser = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cpf: new FormControl('', Validators.required),
    birthDay: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Okay', {
      duration: 5000,
    });
  }

  addUser(): void{
    console.log(this.newUser.value);
    if (this.newUser.valid) {
      try {
        this.userService.createUser(this.newUser.value);
        this.openSnackBar('Usuário cadastrado com sucesso!');
        setTimeout(() => {
          this.router.navigateByUrl('/users');
        }, 2000)
      } catch (err) {
        this.openSnackBar('Erro ao cadastrar usuário')
      }
    } else {
      this.openSnackBar('Informações inválidas')
    }

  }
}
