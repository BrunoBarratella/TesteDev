import { criaElemento } from "./mostraNum";

const envia = document.querySelector(".adiciona")

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

    console.log(atual)

})