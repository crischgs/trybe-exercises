const headingOne = document.createElement('h1');
headingOne.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(headingOne);

const mainTag = document.createElement('main');
mainTag.className = 'main-content';
document.body.appendChild(mainTag);

const centerSection = document.createElement('section');
centerSection.className = 'center-content';
mainTag.appendChild(centerSection);