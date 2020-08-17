//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener("click", cloneField)


//Executar uma ação
function cloneField() {
    //Duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //lmpar os campos
    const fields = newFieldContainer.querySelectorAll("input")

    //para cada campo, limpar
    fields.forEach(function(field) {
        field.value = ""
    })

    //Colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}