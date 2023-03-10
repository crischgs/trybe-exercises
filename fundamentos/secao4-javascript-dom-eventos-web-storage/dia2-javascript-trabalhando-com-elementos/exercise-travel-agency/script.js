const headingOne = document.createElement('h1');
headingOne.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(headingOne);

const mainTag = document.createElement('main');
mainTag.className = 'main-content';
document.body.appendChild(mainTag);

const centerSection = document.createElement('section');
centerSection.className = 'center-content';
mainTag.appendChild(centerSection);

const pFilhoSection = document.createElement('p');
pFilhoSection.innerText = 'A Trybe pode te levar para o destino mais desejado de todos: o sucesso!';
centerSection.appendChild(pFilhoSection);