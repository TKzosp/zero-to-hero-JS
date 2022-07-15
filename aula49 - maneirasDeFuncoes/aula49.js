// Declaração de função (function hoisting)
falaIo();
function falaIo() {
  console.log('oie');
}
// First-class objects (objetos de primeira classe)
// function expression
const souUmDado = function () {
  console.log("sou um dado");
};
souUmDado();

// Arrow function

const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};