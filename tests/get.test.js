const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

beforeAll(async () => {
    // Configuração antes de rodar os testes (ex: conexão com o MongoDB)
    // await mongoose.connect(process.env.MONGODB_URI);
});

afterAll(async () => {
    // Fechando a conexão com o MongoDB
    await mongoose.disconnect();
});
describe('Função para pegar um Carro', () => {
    it('Deve encontrar o carro', async () => {
        var userId = '67991afc2a565f894cb0ee4a';

        // Enviar requisição para buscar o carro
        const res = await request(app).get(`/api/carros/${userId}`);

        // Verifica se o conteúdo é um objeto válido
        expect(res.status).toBe(200);
    });

    it('Deve acusar erro de carro não encontrado', async () => {
        var userId = '678a94a0f06c3657cc7fc11T';

        // Enviar requisição para buscar o carro
        const res = await request(app).get(`/api/carros/${userId}`);

        // Verifica se o conteúdo é um objeto válido
        expect(res.status).toBe(500);
    });
});