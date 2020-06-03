import express from 'express';

const app = express();

app.use(express.json())

const users = [
    'Isabela',
    'Diego',
    'Lucas',
    'Larissa',
    'João',
    'Luiz'
];

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários')
    const search = String(request.query.search)  // Nome do parâmetro é definido na requisição
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;  // if/else ternário

    return response.json(filteredUsers)
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id)  // Envia o nome do parâmetro na própria rota
    const user = users[id]

    return response.json(user)
});    

app.post('/users', (request, response) => {
    const data = request.body

    const user = {
        nome: data.name,
        email: data.email
    }   
    
    return response.json(user)
});

app.listen(3333);  // Porta do localhost