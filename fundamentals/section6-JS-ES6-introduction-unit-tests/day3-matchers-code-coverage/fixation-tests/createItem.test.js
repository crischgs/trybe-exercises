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
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });

  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(1.99, 'kg', 'banana', 20)).toThrowError();
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -0.01, 20)).toThrowError();
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0.00, 20)).toThrowError();
  });
});
