
// Váriaveis principais
const express = require('express'); // Importa o Framework express
const { METHODS } = require('http');
const app = express(); // Cria o servidor
const port = 3000; // Variável para armazenar a porta

// Para permitir receber json nas requisições
app.use(express.json())

// Criação dos usuários
const usuarios = [
    {"id": 1,"nome": "Admin", "idade": 20, "senha": "admin123"},
    {"id": 2,"nome": "João", "idade": 20, "senha": "123"},
]

// Parte do site
app.get("/", (req, res) => {
    res.send(`Primeiro servidor AI PSII 2025/1 V1`)
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

app.get("/usuarios", (req, res) => {
    res.send(usuarios)
})

// Buscar usuário pelo ID
app.get("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const user = usuarios.find(user => user.id == id)

    if (user != null) {
        res.send(user)
    } else {
        res.status(404).send(`usuário não encontrado`)
    }
})

// Criar um usuário
app.post("/usuarios", (req, res) => {
    const novoUsuario = req.body

    novoUsuario.id = usuarios.length + 1
    usuarios.push(novoUsuario)

    res.status(201).send(novoUsuario)
})

// Atualizar usuários
app.put("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const novoUsuario = req.body
    novoUsuario.id = id
    const index = usuarios.findIndex(usuario => usuario.id == id)

    if (index != null) {
        usuarios[index] = novoUsuario
        res.status(201).send(novoUsuario)
    } else {
        res.status(404).send(`Usuário não encontrado!`)
    }
})

// Deletar usuários
app.delete("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = usuarios.findIndex(usuario => usuario.id == id)

    if (index != null) {
        usuarios.splice(index, 1)
        res.status(204).send(`Usuário com o id: ${id} removido com sucesso!`)
    } else {
        res.status(404).send(`Usuário não encontrado!`)
    }
})