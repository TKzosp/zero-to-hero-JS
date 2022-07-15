function main () {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const people = [];

  // evento means event
  function reciveEventForm (evento){
    evento.preventDefault();

    // seleciona os campos do formulario
    const name = form.querySelector('.nome');
    const surname = form.querySelector('.sobrenome');
    const weight= form.querySelector('.peso');
    const height = form.querySelector('.altura');
    
    // coloca os valores do formulario na array "people"
    people.push({
      name: name.value,
      surname: surname.value,
      weight: weight.value,
      height: height.value,
    });
    // coloca o resultado na div resultado
    resultado.innerHTML += `<p>${name.value} ${surname.value} ${weight.value} ${height.value}`;
    
  }
  form.addEventListener('submit', reciveEventForm);
}
main();

