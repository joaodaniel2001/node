
// Método GET:
fetch("http://localhost:3000/usuarios").then(res => {
    // Caso de erro (Geralmente utilizado para erro expecifico):
    if (!res.ok) {
        throw new Error("Erro na requisição de Usuários!");
    }

    return res.json();
}).then(usuarios => {
    const listaUsuarios = document.getElementById("textBody")

    usuarios.forEach(usuario => {
        listaUsuarios.innerHTML += `
        <tr>
            <td class="col-3">${usuario.id}</td>
            <td class="col-3">${usuario.nome}</td>
            <td class="col-3">${usuario.idade}</td>
            <td class="col-3">${usuario.cep}</td>
            <td class="col-3"><a class="btn btn-outline-primary" href="userUpdate/index.html?id=${usuario.id}">Atualizar</a></td>
            <td class="col-3"><button type="button" onclick="deletarUsuario(${usuario.id})" class="btn btn-outline-danger">Deletar</button></td>
        </tr>`
    });
    
})
// Se der algum erro geral
.catch(err => {   
    console.error(err);
});

// Função de deletar usuário
function deletarUsuario (user_id) {
    let confirmar = confirm(`Você deseja excluir o usuário ${user_id}?`);

    if (confirmar) {
        fetch(`http://localhost:3000/usuarios/${user_id}`, {
    
            method: 'DELETE',
        
        })
        
            .then(response => {
                if(response.ok) {
                    alert(`Usuário ${user_id} excluido com sucesso!`);
                    window.location.reload();
                    return;
                }          
                alert(`Algo deu erradoh...`);
            })
            
            .catch(error => console.log(error));
    }
}