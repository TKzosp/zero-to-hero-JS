const pessoa = {
  nome: 'Rafael',
  sobrenome: 'Cena',
  idade: 17,
  endereco: {
    rua: 'Tv maria gomes de sa',
    numero: 55,
  }

};


const { endereco: { rua, numero }, } = pessoa;
console.log(rua, numero);