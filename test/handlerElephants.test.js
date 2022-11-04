const handlerElephants = require('../src/handlerElephants');
const getElephants = require('../src/handlerElephants');
const averageAge = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  test('Espera que a handlerElephants exista.', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  test('Espera que a averageAge exista.', () => {
    expect(typeof averageAge).toBe('function');
  });

  test('Espera que a getElephants exista.', () => {
    expect(typeof getElephants).toBe('function');
  });

  test('Espera que a handlerElephants retorne undefined se nao receber parametro', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  test('Espera que a handlerElephants retorne erro se receber parametro diferente de string', () => {
    expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
  });

  test('Espera que a funçao handlerElephant retorne a quantidade de residents caso seja count', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  test('Espera que a funçao handlerElephant retorne um array de residents caso seja name', () => {
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
});
