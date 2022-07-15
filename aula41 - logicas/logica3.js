function fizzBuzz(valor) {
  // checa o tipo do input
  if (typeof valor !== 'number') return valor;
  // verifica se o valor é divisível por 3 e por 5
  if (valor % 3 === 0 && valor % 5 === 0) return 'FizzBuzz';
  // verifica se o valor é divisível por 3
  if (valor % 3 === 0) return 'Fizz';
  // verifica se o valor é divisível por 5
  if (valor % 5 === 0) return 'Buzz';
  return valor;
}
const total = 100;
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}