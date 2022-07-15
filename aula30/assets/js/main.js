function getDayOfWeek (diaSemana){
const diasDaSemana = [ 'Domingo','Segunda-Feira','terça','quarte',
  'quinta','sexta','sabado', ];
  return diasDaSemana[diaSemana];
}

function getMonth(month){
const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',];
 return meses[month];
}
// get raw info
const { month, diaSemana, hora, minutos, ano } = newFunction();


// convert raw info in cooked info
const  monthName= getMonth(month);
const diaSemanaTexto = getDayOfWeek(diaSemana);

function newFunction() {
  const data = new Date();
  const diaSemana = data.getDay();
  const hora = data.getHours();
  const minutos = data.getMinutes();
  const ano = data.getFullYear();
  const month = data.getMonth();
  return { month, diaSemana, hora, minutos, ano };
}

function colocaNoHTML(hora, minutos, diaSemanaTexto, ano, monthName){
  const local = document.querySelector('#local');
  local.innerHTML = `${diaSemanaTexto}, ${monthName} de ${ano}<br>${hora}:${minutos}`;
}
colocaNoHTML(hora, minutos, diaSemanaTexto, ano, monthName );

// const local = document.querySelector('#local');
// const data = new Date();
// const option = {dateStyle: 'full', timeStyle: "medium"};
// local.innerHTML = data.toLocaleString('pt-BR', option);