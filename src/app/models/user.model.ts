import * as moment from 'moment';

export class User {
  id: string;
  name: string;
  cpf: string;
  birthDay: moment.Moment;

  constructor(id: string, name: string, cpf: string, birthDay: moment.Moment) {
    this.id = id;
    this.name = name;
    this.cpf = cpf;
    this.birthDay = birthDay;
  }

  get userAge() {
    console.log(moment(this.birthDay), moment(this.birthDay).year());
    return moment().subtract(moment(this.birthDay).year(), 'years').year();
  }

  get legalAge() {
    return this.userAge >= 18;
  }
}

