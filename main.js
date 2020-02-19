var name = prompt("Seja bem vindx. Por favor, digite seu nome.")
var namePrint = document.getElementById("print")
namePrint.innerHTML = "<h2 id ='print'>Bem vindx " + name + "</h2>"
var decisao = parseInt(prompt("Gostaria de fazer a prova? \n1.Sim \n2.Não?"))
if (decisao == 1) {
    let question1 = prompt("Quanto é 2+2? \n1. 4\n2. 6\n3. 22")
    if (question1 == 1) {
        var correto1 = document.getElementById("correto")
        correto1.innerHTML = "<p id='correto'>Resposta 1</p>"
    }
    else {
        var errado1 = document.getElementById("errado")
        errado1.innerHTML = "<p id='errado'>Resposta 1</p>"
    }

    let question2 = prompt("Qual é a cor da caixa preta do avião? \n1.vermelha \n2.preta \n3.banana")
    if(question2 == 1){
        var correto2 = document.getElementById("correto2")
        correto2.innerHTML = "<p id='correto2'>Resposta 2</p>"
    }
    else {
        var errado2 = document.getElementById("errado2")
        errado2.innerHTML = "<p id='errado2'>Resposta 2</p>"
    }

    let question3 = prompt("Quando é 1 + 1? \n1. 2 \n2. 4 \n3. 80")
    if(question3 == 1){
        var correto3 = document.getElementById("correto3")
        correto3.innerHTML = "<p id='correto3'>Resposta 3</p>"
    }
    else {
        var errado3 = document.getElementById("errado3")
        errado3.innerHTML = "<p id='errado3'>Resposta 3</p>"
    }

}
else {
    document.write("<h1>" + name + ", sua prova foi cancelada" + "</h1>")
}