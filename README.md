
# NODE.js

## Sumário

- [Comandos](#comandos)
- [Frameworks](#frameworks)
- [Servidor básico](#servidor-básico)

### Comandos

- **Criação do servidor NODE.js:**

```bash
mkdir nome-servidor     # Criação da pasta
cd nome-servidor        # Entra na pasta para modificar os arquivos
npm init -y             # Coloca no modo padrão
```

- **Iniciar o servidor:**

    ```javascript
    node .\server.js
    ```

    - De maneira automática:
    ```bash
    
    ```
    
### Frameworks

- **Express:** 

```bash
npm install express
```

### Servidor básico:

- Código básico para criação do servidor **NODE.js**:

```javascript
const express = require('express'); // Importa o Framework express
const app = express(); // Cria o servidor
const port = 3000; // Variável para armazenar a porta

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
```
- Após isso,

