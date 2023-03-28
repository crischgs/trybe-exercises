let saldo = 1107;

function somaSaldo(valor) {
    return valor + saldo;
}

function subtraiSaldo(valor) {
  return saldo - valor;
};

function multiplicaSaldo(valor) {
  return valor * saldo;
};

function divideSaldo(valor) {
  return saldo / valor;
};

console.log(somaSaldo(2000));
console.log(subtraiSaldo(80));
console.log(multiplicaSaldo(2));
console.log(divideSaldo(2));
