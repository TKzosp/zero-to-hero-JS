// Do while executa o loop sem verificar a condição. 
// o while normal verifica depois executa.

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let contador = 0;

let rand = 10;

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
  contador = contador + 1;
}

console.log(`numero de vezes ${contador}`);
console.log("##########");
contador = 0;

do {
  rand = random(min, max);
  console.log(rand);
  contador++;
} while (rand !== 10);

console.log(`numero de vezes ${contador}`);
