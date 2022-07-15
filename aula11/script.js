// Registra os inputs do usuario
let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número: ');
console.log(num1, num2); // verifica se os numeros estão certos

//Muda o tipo de dado de string para number
num1 = Number(num1);
num2 = Number(num2);
console.log(typeof num1, typeof num2); //checa isso

//printa o resultado
const resultado = num1 + num2;
window.alert(resultado);
