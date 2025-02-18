const { imposto } = require('../src/math');

describe('Cálculo de Imposto de Venda', () => {
    it('Apenas um teste.', () => {
        expect(imposto(150)).toBe(15);
    });
});