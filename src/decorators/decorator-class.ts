export class Animal {
  constructor(public cor: string) { }
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
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

const AnimalDecorated = decorator(Animal)
const animal = new AnimalDecorated('roxo');
console.log(animal)