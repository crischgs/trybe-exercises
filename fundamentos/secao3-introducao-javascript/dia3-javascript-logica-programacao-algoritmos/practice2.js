let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaCliente(nome) {
    if (typeof nome === 'string') {
        clientesTrybeBank.push(nome);
        return nome + ' foi adicionado com sucesso.';
    } else {
        return 'Não foi adicionado um nome válido.';
    }
}

console.log(adicionaCliente('Cris'));
console.log(clientesTrybeBank);