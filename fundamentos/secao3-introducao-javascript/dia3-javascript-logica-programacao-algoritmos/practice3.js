let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(nome) {
    let clienteExiste = false;
    if (typeof nome === 'string') {
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (nome === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                clienteExiste = true;
                return 'Cliente removido com sucesso.';
            }
        }
        if (clienteExiste === false) {
            return 'Cliente não encontrado.'
        }
    } else {
        return 'O parâmetro deve ser uma string.';
    }
}

console.log(removeCliente('John'));
console.log(clientesTrybeBank);