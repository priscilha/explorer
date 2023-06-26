//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let num1 = prompt('Digite o primeiro número:') 
let num2 = prompt('Digite o segundo número:') 

function soma(num1, num2) {
    let soma = num1 + num2
    return soma

}


alert(soma(Number(num1), Number(num2)))
