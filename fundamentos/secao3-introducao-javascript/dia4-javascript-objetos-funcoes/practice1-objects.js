let diasDaSemana = {
  1: 'domingo',
  2: 'segunda-feira',
  3: 'terça-feira',
  4: 'quarta-feira',
  5: 'quinta-feira',
  6: 'sexta-feira',
  7: 'sábado',
};

diasDaSemana['1'];
console.log(diasDaSemana['1']);

///////////////////////////////////////

let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]);
console.log(conta[infoDoBanco]['nome']);

console.log(conta.agencia); 
console.log(conta['agencia']); 

console.log(conta.banco.cod); 
console.log(conta['banco']['id']);

///////////////////////////////////////

let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

console.log(usuario['id']);
console.log(usuario.email);

console.log(usuario.infoPessoal.endereco.rua);
console.log(usuario['infoPessoal']['endereco']['cidade']);

///////////////////////////////////////

let moradores = [
  {
    nome: 'Luíza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); 
console.log(primeiroMorador['andar']);

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador);
console.log(ultimoMorador.nome);

///////////////////////////////////////

