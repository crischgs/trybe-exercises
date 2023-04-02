const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    const expected = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
    const actual = createItem('banana', 'kg', 1.99, 20);
    expect(actual).toEqual(expected);
  });
  it('utiliza zero como quantidade padrão', () => {
    const expected = 0;
    const actual = createItem('banana', 'kg', 1.99);
    expect(actual).toHaveProperty('quantity', expected);
  });
  it.todo('Lança um erro quando não recebe parâmetros');
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});
