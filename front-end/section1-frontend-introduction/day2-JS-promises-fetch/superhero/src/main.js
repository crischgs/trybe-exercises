import './style.css';

const heroPic = document.querySelector('img');
const heroName = document.querySelector('p');
const btnShuffle = document.querySelector('button');

const heroApi = 'https://akabab.github.io/superhero-api/api';

const randomId = () => Math.floor(Math.random() * 700);

btnShuffle.addEventListener('click', (e) => {
  e.preventDefault();
  const id = randomId();
  fetch(`${heroApi}/id/${id}.json`)
    .then((result) => result.json())
    .then((data) => {
      heroPic.src = data.images.sm;
      heroName.innerText = data.name;
    })
})
