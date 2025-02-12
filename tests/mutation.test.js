const { imposto } = require('../src/math');

describe('Cáculo de Imposto de Venda', () => {
    it('Apenas um teste.', () => {
        expect(imposto(150)).toBe(15);
    });
});