
# NODE.js

## Sumário

- [Frameworks](#frameworks)

### Frameworks

- **Express:** 

```bash
npm install express
```

### Servidor básico:

- 

```javascript
const express = require('express'); // Importa o Framework express
const app = express(); // Cria o servidor
const port = 3000; // Variável para armazenar a porta

app.linsten(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
```

