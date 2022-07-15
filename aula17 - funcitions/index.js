// funcão padrão
function soma(x, y){
  const resultado = x + y;
  return resultado;
}
const resultado = soma(93,2);
console.log(resultado);

// função anomina 
const quadrado = function(n){
  return n ** 2;
};
console.log(quadrado(9));

// arrow function
const raiz = (n) => n ** 0.5;
console.log(raiz(9));