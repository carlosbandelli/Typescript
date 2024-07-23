export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma(...args: (number | string)[]): number {
  const numeros = args.filter(isNumber);
  const retorno = numeros.reduce((sum, value) => {
    return sum + value;
  }, 0);
  return retorno;
}

console.log(soma(1, 2, 3)); // Saída: 6
console.log(soma(1, 2, 3, 'a')); // Saída: 6
console.log(soma('a', 'b', 'c')); // Saída: 0
