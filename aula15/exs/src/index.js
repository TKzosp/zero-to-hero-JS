const numero = Number(prompt('Digite o seu número: '));

const numeroTitulo = document.getElementById('numero-titulo');

const divTexto = document.getElementById('texto')

numeroTitulo.innerHTML = `${numero}`


divTexto.innerHTML += `Raiz quadrada: ${Math.sqrt(numero)}<br/>`;
divTexto.innerHTML += `é um numero inteiro: ${Number.isInteger(numero)}<br/>`;
divTexto.innerHTML += `É NaN: ${Number.isNaN(numero)}<br/>`;
divTexto.innerHTML += `Arredondado para baixo: ${Math.floor(numero)}<br/>`;
divTexto.innerHTML += `Arredondado para cima: ${Math.ceil(numero)}<br/>`;
divTexto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}`