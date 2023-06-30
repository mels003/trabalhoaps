const assert = require('assert');
const { f1, f2, f3, f4 } = require('./operaçoes');
describe('Calculadora', function () {
  describe('Função f1()', function () {
    it('Deve retornar a soma correta de dois números', function () {
      const result = f1(5, 10);
      assert.strictEqual(result, 15);
    });
  });

  describe('Função f2()', function () {
    it('Deve retornar a subtração correta de dois números', function () {
      const result = f2(10, 5);
      assert.strictEqual(result, 5);
    });
  });

  describe('Função f3()', function () {
    it('Deve retornar a multiplicação correta de dois números', function () {
      const result = f3(5, 10);
      assert.strictEqual(result, 50);
    });
  });

  describe('Função f4()', function () {
    it('Deve retornar a divisão correta de dois números', function () {
      const result = f4(10, 2);
      assert.strictEqual(result, 5);
    });

    it('Deve retornar uma mensagem de erro ao tentar dividir por zero', function () {
      const result = f4(10, 0);
      assert.strictEqual(result, 'Divisão por zero não é permitida.');

    });
  });
});

mocha.run();