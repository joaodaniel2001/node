
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
        console.log(usuario);
        listaUsuarios.innerHTML += `
        <tr>
        <td class="col-3">${usuario.id}</td>
        <td class="col-3">${usuario.nome}</td>
        <td class="col-3">${usuario.idade}</td>
        <td class="col-3">${usuario.senha}</td>
        <td class="col-3"><a class="btn btn-outline-primary" href="userUpdate/index.html?id=${usuario.id}">Atualizar</a></td>
        </tr>`
    });
    
})
// Se der algum erro geral
.catch(err => {   
    console.error(err);
});