const form=document.getElementById("novoItem")

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    
   const nome=event.target.elements['nome'];
    const quantidade=event.target.elements['quantidade'];



 //evento de interação,são os dois inputs de nome  e quantidade
    criaElemento(nome.value, quantidade.value)

    nome.value=""
    quantidade.value=""

})


//essa função recebe os dados de item e quantidade e os retorna adicionando na lista ul e estilizados com a tag strng.
function criaElemento(nome, quantidade){


const novoItem= document.createElement('li')
novoItem.classList.add('item')


const numeroItem= document.createElement('strong')
numeroItem.innerHTML = quantidade

novoItem.appendChild(numeroItem)
novoItem.innerHTML += nome

const lista= document.getElementById("lista2")

lista.appendChild(novoItem)

console.log(novoItem)
}