
const criarTarefa = (evento) =>{
    evento.preventDefault()//impedi que  apágina seja recarregada ao clicar no botão   

    const input  = document.querySelector('[data-form-input]')//selector data-form-attributes
    const valor = input.value 
    const lista = document.querySelector('[data-list]')
    //const  tarefa = document.querySelector('[data-linha]')
    const tarefa = document.createElement('li')//criar  elementos linha
    tarefa.classList.add('tarefa')//adisonar class de css estilo
    const conteudo = `<p>${valor}</p>` // comfigurando a vareavel como paragrafo

     tarefa.innerHTML = conteudo
     lista.appendChild(tarefa)//armazenano conteudo na linha 
     tarefa.appendChild(buttonConcluir())//linha mãe do botão
     tarefa.appendChild(ButtonExcluir())


    input.value=" "
 

}
 const ButtonExcluir = () =>{
   const  buttonExcluir = document.createElement('button')
     buttonExcluir.classList.add('clicado')
     buttonExcluir.textContent ='excluir'
     buttonExcluir.addEventListener('click',excluirTarefa)
     return buttonExcluir


     
 }
const buttonConcluir = () =>{
     const buttonConcluir = document.createElement('button')
     buttonConcluir.classList.add('clicado')
     buttonConcluir.textContent ='Concluir'
     buttonConcluir.addEventListener('click',concluirTarefa)
     return buttonConcluir


}
const concluirTarefa = (evento) =>{
    const buttonConcluir = evento.target
    const tarefaCompleta = buttonConcluir.parentElement
    tarefaCompleta.classList.toggle('feito')
}
const excluirTarefa = (evento) =>{
    const buttonExcluir = evento.target
    const tarefaExcluir = buttonExcluir.parentElement//associa ao elemento pai (parentElement)
    tarefaExcluir.remove();

}






const novaTarefa =  document.querySelector('[data-form-button]')//selector data-form-attributes
novaTarefa.addEventListener('click', criarTarefa)