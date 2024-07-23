interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Carlos',
  sobrenome: 'Bandelli',
  idade: 30,
}

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 30,
}

const aluno3: PessoaProtocolo = {
  nome: 'Bandelli',
  sobrenome: 'Carlos',
  idade: 30,
}

console.log(aluno1, aluno2, aluno3)