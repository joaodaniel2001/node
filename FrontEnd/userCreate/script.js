
function cadastroUsuario(event) {
    event.preventDefault();

    let nome = event.target.nome.value;
    let idade = event.target.idade.value;
    let senha = event.target.senha.value;
    let cep = event.target.cep.value;

    var valida_cep = /^[0-9]{8}$/;

    if (!valida_cep.test(cep)) {
        alert(`CEP inválido!`)
        return
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(endereco => {
            if (endereco.erro) {
                alert(`CEP não encontrado!`)
                return
            }

            return fetch('http://localhost:3000/usuarios', {

                method: 'POST',

                headers: {

                    'Content-Type': 'application/json'

                },

                body: JSON.stringify({
                    "nome": nome,
                    "idade": idade,
                    "senha": senha,
                    "cep": cep,
                    "rua": endereco.logradouro,
                    "bairro": endereco.bairro,
                    "cidade": endereco.localidade,
                    "uf": endereco.uf
                })
            })
        })

        .then(response => response.json())

        .then(data => {
            if (data) {
                alert(`Usuário cadastrado com sucesso!`)
                window.location = "../index.html"
            }
        })

        .catch(error => console.log(error))

}