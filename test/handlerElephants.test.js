const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Espera que a HandlerElephants exista.', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  test('Espera que a averageAge retorne a media de idade dos residents elephants', () => {});
});
