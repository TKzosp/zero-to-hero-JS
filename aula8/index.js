// define as constentes do codígo
const nome = 'Rafael';
const sobrenome = 'Felippe';
const alturaMetros = 1.8;
// const dataDeNascimento = '24/08/2004';
const idade = 17;
const peso = 113.08;
let indiceMassaMuscular;
let anoNascimento;

indiceMassaMuscular = peso / alturaMetros ** 2;
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaMetros} e seu IMC é de ${indiceMassaMuscular}`);
console.log(
    `${nome} nasceu possivélmente entre ${anoNascimento} e`,
    anoNascimento - 1
);
