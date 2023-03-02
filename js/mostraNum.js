const ListaNum = document.querySelector(".btn-numeros")
const Mostra = document.querySelector(".MostraNum")
const lista = document.getElementById("lista")
const cadastraUsuario = document.querySelector(".container-cadastro-usuario")

function Conta100 (i) {
for (var i = 1; i <= 100; i++){
    var valor = 0
    if(i % 3 == 0){
        valor=i*30
    }else{
        valor=i
    }
    criaElemento(valor)
}
}

ListaNum.addEventListener("click", () =>{
    Mostra.style.display="flex"
    cadastraUsuario.style.top= "25%"
    Conta100();
})

export function criaElemento (valor){
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    novoItem.innerHTML += valor

    lista.appendChild(novoItem);
}

