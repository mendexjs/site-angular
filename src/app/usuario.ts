export class Usuario {
  id: string;  
  nome: string; 
  cpf: string;
  idade: number ;

  constructor(id: string, nome: string, cpf: string, idade: number) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
  }
}

