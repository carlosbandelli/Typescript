export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  sala: string;
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return "Isso vem do cliente: " + this.nome + " " + this.sobrenome;
  }
}

const aluno = new Aluno("Carlos", "Bandelli", 30, "000.000.000-00", "0001");
const cliente = new Cliente("Carlos", "Bandelli", 30, "000.000.000-00");
const pessoa = new Pessoa("Carlos", "Bandelli", 30, "000.000.000-00");

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getIdade());
console.log(aluno);
