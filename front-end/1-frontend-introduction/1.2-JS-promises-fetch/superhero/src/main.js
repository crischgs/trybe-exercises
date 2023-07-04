import './style.css';
import Swal from 'sweetalert2';

const heroPic = document.querySelector('img');
const heroName = document.querySelector('p');
const btnShuffle = document.querySelector('button');

const heroApi = 'https://akabab.github.io/superhero-api/api';

const randomId = () => Math.floor(Math.random() * 1000);

btnShuffle.addEventListener('click', (e) => {
  e.preventDefault();
  const id = randomId();
  fetch(`${heroApi}/id/${id}.json`)
    .then((result) => result.json())
    .then((data) => {
      heroPic.src = data.images.sm;
      heroName.innerText = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: 'Generated id does not exist.',
      icon: 'error',
      confirmButtonText: 'Ok',
    }));
});
