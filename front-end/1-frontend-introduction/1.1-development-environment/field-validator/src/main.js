import './style.css';
import validator from 'validator.js';

const input = document.querySelector('input');
const selected = document.querySelector('select');
const sub = document.querySelector('button');
const validation = document.querySelector('p');

sub.addEventListener('click', (event) => {
  event.preventDefault();

  const validate = {
    email: validator.isEmail(input.value),
    eth: validator.isEthereumAdress(input.value),
    ip: validator.isIP(input.value),
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    empty: validator.isEmpty(input.value),
  }

  validation.innerText = `Validation is ${validate[selected.value]}`;

})
