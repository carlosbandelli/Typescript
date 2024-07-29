function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('')
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverter(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse.().join('')
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a Classe')
  }
}

// const animal = new Animal('roxo');
// console.log(animal)