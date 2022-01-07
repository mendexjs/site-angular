import {Component, OnInit} from '@angular/core';
import {registerLocaleData} from "@angular/common";
import ptBr from "@angular/common/locales/pt";
import {UserService} from "./services/usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'site-angular';
  nome = '';
  vetor = ['jarbas']

  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    registerLocaleData(ptBr);
    this.userService.getUsersFromDB();
  }
}
