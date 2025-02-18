const request = require('supertest');

const API_URL = 'https://jsonplaceholder.typicode.com';

describe('Testes na API JSONPlaceholder', () => {
    // 1️ - Testando uma requisição GET
    test('Deve buscar um post pelo ID', async () => {
        const response = await request(API_URL).get('/posts/1');

        expect(response.status).toBe(200); // Verifica se a resposta foi bem-sucedida
        expect(response.body).toHaveProperty('id', 1); // Garante que o post tem o ID correto
        expect(response.body).toHaveProperty('title'); // Verifica se há um título
        expect(response.body).toHaveProperty('body'); // Verifica se há um corpo
    });

    // 2️ - Testando uma requisição POST
    test('Deve criar um novo post', async () => {
        const newPost = {
            title: 'Post de Teste',
            body: 'Este é um post criado via teste automatizado',
            userId: 1,
        }

        const response = await request(API_URL)
        .post('/posts')
        .send(newPost)
        .set('Content-Type', 'application/json');

        expect(response.status).toBe(201); // Verifica se o post foi criado com sucesso
        expect(response.body).toMatchObject(newPost); // Confirma que os dados enviados são os mesmos retornados
    });

    // 3️ - Testando uma requisição PUT
    test('Deve atualizar um post existente', async () => {
        const updatedPost = {
            id: 1,
            title: 'Título atualizado',
            body: 'Conteúdo atualizado no teste',
            userId: 1
        }

        const response = await request(API_URL)
        .put('/posts/1')
        .send(updatedPost)
        .set('Content-Type', 'application/json');

        expect(response.status).toBe(200); // Verifica se a atualização foi bem-sucedida
        expect(response.body).toMatchObject(updatedPost); // Confirma que o post foi atualizado corretamente
    });

    // 4️ - Testando uma requisição DELETE
    test('Deve deletar um post', async () => {
        const response = await request(API_URL).delete('/posts/1');

        expect(response.status).toBe(200); // O JSONPlaceholder retorna 200 para DELETE, mesmo sem deletar de fato
    });
});