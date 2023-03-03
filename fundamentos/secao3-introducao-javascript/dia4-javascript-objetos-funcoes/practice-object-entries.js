let countries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
  };

  let pairKeyValue = Object.entries(countries);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };

///////////////////////

  let estados = {
    minas: 'bh',
    saoPaulo: 'São Paulo',
    espiritoSanto: 'Vitória',
  };

  let parChaveValor = Object.entries(estados);

  for (index in parChaveValor) {
    console.log('----------');
    console.log('Estado:', parChaveValor[index][0]);
    console.log('Capital:', parChaveValor[index][1]);
  }