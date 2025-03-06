// tests/math.test.js
const { extrairTitulos } = require('../src/map');
const request = require('supertest');

const API_URL = 'https://jsonplaceholder.typicode.com/';
describe('Testes de Integração e Unitários - API JSONPlaceholder', () => {
    // Teste Unitário usando os dados da API
    test('Deve extrair os títulos dos posts retornados da API', async () => {
        const response = await request(API_URL).get('posts'); // Busca os posts da API

        expect(response.status).toBe(200); // Verifica se a API retornou corretamente

        const posts = response.body; // Obtém os dados da API

        const titulos = extrairTitulos(posts); // Aplica a função aos dados da API

        expect(Array.isArray(titulos)).toBe(true); // Verifica se o retorno é um array
        expect(titulos.length).toBe(posts.length); // O número de títulos deve ser igual ao número de posts
        expect(titulos[0]).toBe(posts[0].title); // O primeiro título deve ser o mesmo do primeiro post
    });
    test('Deve acusar erro na função.', async () => {
        expect(() => extrairTitulos(false)).toThrow("A entrada precisa ser um array de objetos");
    });
});