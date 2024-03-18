export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log("olaá", colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super("Udemy", "11.111.111/0001-11")
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop()
    if (colaborador) return colaborador
    return null
  }

}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) { }
}

const empresa1 = new Udemy;
const colaborador1 = new Colaborador("Carlos", "Bandelli");
const colaborador2 = new Colaborador("Nice", "Bandelli");
empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.mostrarColaboradores();
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
