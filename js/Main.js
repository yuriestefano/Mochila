const form=document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens= JSON.parse(localStorage.getItem('itens')) || []

itens.forEach((elemento => {
    console.log(elemento.nome, elemento.quantidade)
}))

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    
   const nome=event.target.elements['nome'];
    const quantidade=event.target.elements['quantidade'];

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value}



 //evento de interação,são os dois inputs de nome  e quantidade
    criaElemento(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value=""
    quantidade.value=""

})


//essa função recebe os dados de item e quantidade e os retorna adicionando na lista ul e estilizados com a tag strng.
function criaElemento(item){


const novoItem= document.createElement('li')
novoItem.classList.add('item')


const numeroItem= document.createElement('strong')
numeroItem.innerHTML = item.quantidade
novoItem.appendChild(numeroItem)

novoItem.innerHTML += item.nome

lista.appendChild(novoItem)



}



