const request = require('supertest');

const API_URL = 'http://localhost:3000';

describe('Função para a rota de Usuário', () => {
    it('Deve encontrar um Usuário.', async () => {
        // Enviar requisição para buscar todos os usuários
        const res = await request(API_URL).get('/usuarios');

        // Verifica se o conteúdo é um objeto válido
        expect(res.status).toBe(200);
    });
});