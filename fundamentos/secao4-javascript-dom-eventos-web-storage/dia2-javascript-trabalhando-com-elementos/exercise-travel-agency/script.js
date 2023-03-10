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

const leftSection = document.createElement('section');
leftSection.className = 'left-content';
mainTag.appendChild(leftSection);

const rightSection = document.createElement('section');
rightSection.className = 'right-content';
mainTag.appendChild(rightSection);

const pic = document.createElement('img');
pic.src = 'https://picsum.photos/200';
pic.className = 'small-image';
leftSection.appendChild(pic);

const numbers = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const list = document.createElement('ul');
rightSection.appendChild(list);
for (let index = 0; index < numbers.length; index += 1) {
    const items = document.createElement('li');
    list.appendChild(items);
    items.innerText = numbers[index];
}