// tests/math.test.js
const { soma } = require('../src/math');

describe('Função de soma', () => {
    test('Deve somar dois números corretamente', () => {
        expect(soma(2, 3)).toBe(5);
    });

    test('Deve lançar erro se um dos parâmetros não for número', () => {
        expect(() => soma(2, 'a')).toThrow("Os parâmetros devem ser números");
    });
});