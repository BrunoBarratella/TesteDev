const envia = document.querySelector(".adiciona")
const tabela = document.querySelector("#tabela-de-usuarios")
const listarUsuarios = document.querySelector(".listaUsuario")
const tabelaUsuarios = document.querySelector(".tabela-usuarios")

envia.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    // const email = evento.target.elements['e-mail']
    const apelido = evento.target.elements['apelido']
    // const senha = evento.target.elements['senha']


    const atual = {
        "nome": nome.value,
        "apelido": apelido.value
    }

    criaElemento2(atual, tabela);

})

listarUsuarios.addEventListener("click", () => {
    tabelaUsuarios.style.display = "flex"
})

function criaElemento2(objeto, tabela) {

    const { nome, apelido } = objeto;
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    novoItem.innerHTML += "Nome: " + nome + " <br> " + "Apelido: " + apelido
    novoItem.innerHTML += "<hr></hr>"

    tabela.appendChild(novoItem);

}