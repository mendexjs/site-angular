import { Component, OnInit } from '@angular/core';
import{ Usuario } from './../../usuario';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [new Usuario('0', 'jarbas', '00586747052', 37),
    new Usuario('1', 'joao', '00586747055', 37),
    new Usuario ('2', 'maria', '00586747082', 38) ]

 p1 = new Usuario('0', 'jarbas', '00586747052', 37)
  constructor() { }

  ngOnInit(): void {
  }

}
