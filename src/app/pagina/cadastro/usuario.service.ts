import { Injectable } from '@angular/core';
import { Usuario } from '../../usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsuarios(): Usuario[] {
    return JSON.parse(localStorage.getItem("BD"));
  }

  setUsuario(usuario: Usuario): void {
		let lista = this.getUsuarios();
		lista.push(usuario)
       localStorage.setItem("BD", JSON.stringify(lista));
  }

}
