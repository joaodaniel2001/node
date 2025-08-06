
const express = require('express'); // Importa o Framework express
const app = express(); // Cria o servidor
const port = 3000; // Variável para armazenar a porta

app.get("/", (req, res) => {
    res.send(`Primeiro servidor AI PSII 2025/1 V1`)
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})