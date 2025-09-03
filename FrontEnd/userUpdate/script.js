const params = new URLSearchParams(window.location.search);

const usuarioId = params.get("id");
let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let senha = document.getElementById("senha");
let cep = document.getElementById("cep");

document.addEventListener("DOMContentLoaded", () => {
    fetch(`http://localhost:3000/usuarios/${usuarioId}`)
        .then(response => response.json())
        .then(data => {
            nome.value = data.nome;
            idade.value = data.idade;
            senha.value = data.senha;
            cep.value = data.cep;
        })
        .catch(error => console.log(error));
});

// Buscar endereço pelo CEP ao perder o foco
cep.addEventListener("blur", () => {
    const valida_cep = /^[0-9]{8}$/;
    if (!valida_cep.test(cep.value)) {
        alert("CEP inválido!");
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(response => response.json())
        .then(endereco => {
            if (endereco.erro) {
                alert("CEP não encontrado!");
                return;
            }
        })
        .catch(error => console.log(error));
});

function atualizarUsuario(event) {
    event.preventDefault();
    fetch(`http://localhost:3000/usuarios/${usuarioId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nome: nome.value,
            idade: idade.value,
            senha: senha.value,
            cep: cep.value
        })
    })
    .then(() => {
        window.location.href = "../index.html";
    })
    .catch(error => console.log(error));
}
