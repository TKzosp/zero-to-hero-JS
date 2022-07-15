function relogio() {

  const relogio = document.querySelector('.timer');
  let segundos = 0;
  let timer;

  function criaHoraDosSegundos(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  function iniciarRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
      clearInterval(timer);
      iniciarRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
    }

    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }
  });
}
relogio();