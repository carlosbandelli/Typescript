interface TipoNome {
  nome: string;
};

interface TipoSObrenome {
  sobrenome: string;
};

interface TipoNomeCompleto {
  nomeCompleto(): string;
};

type TipoPessoa = TipoNome & TipoSObrenome & TipoNomeCompleto;

interface TipoPessoa2 extends TipoNome, TipoSObrenome, TipoNomeCompleto { }

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) { }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Carlos', 'Bandelli');
console.log(pessoa.nomeCompleto())