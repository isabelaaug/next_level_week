import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários')
    response.json([
        'Isabela',
        'Diego',
        'Lucas',
        'Larissa',
        'João'
    ])
});

app.listen(3333);  // Porta do localhost