// cria um objeto direto
const pessoa2 = {
  nome: 'Arthur',
  sobrenome: 'Cena',
  idade: 7,
};

// Uma função que tem o nome de factory
// ela cria objetos
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}
// faz parte do percurso de uma factory
// se uma const para criar de verdade o objeto
const pessoa1 = criaPessoa('Rafael', 'Felippe', 17 );


// objeto com metodo
const pessoa3 = {
  nome: 'João Pedro',
  sobrenome: 'Cena',
  idade: 9,


  fala(){
    console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
  },
  incrementaIdade(){
    ++this.idade;
  } 
};

pessoa3.fala();