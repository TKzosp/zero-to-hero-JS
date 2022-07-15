function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Date instance expected');
  }

  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

try {
  const data = new Date('04-24-2004 20:53:12');
  const hora = retornaHora(data);
  console.log(hora);

} catch (e) {
  console.log('Erro reinicie sua maquina ou entre em contato com o suporte');
} finally {
  console.log("final do programa");
}


