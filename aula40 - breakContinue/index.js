// continue pula direito para a proxima iteração do loop
// break sai do loop imediatamente
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
do {
  let numero = numeros[i];

  if (numero === 2) {
    console.log('pulei o número 2');
    i++;
    continue;
  }

  if (numero === 7) {
    console.log('Numero encontrado');
    i++;
    break;
  }
  console.log(numero);
  i++;
} while (i < numeros.length);