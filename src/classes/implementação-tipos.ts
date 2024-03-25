type TipoNome = {
  nome: string;

}
type TipoSObrenome = {
  sobrenome: string;

}
type TipoNomeCompleto = {
  nomeCompleto: () => string;
}

export class Pessoa implements TipoNome, TipoSObrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) { }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Carlos', 'Bandelli');
console.log(pessoa.nomeCompleto())