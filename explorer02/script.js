/* 
- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;
- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.*/

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número número: "))

let soma = num1 + num2
let subt = num1 - num2
let mult = num1 * num2
let div = num1 / num2
let rest = num1 % num2



alert(`A soma dos dois números é:  ${soma}`)
alert(`A subtração dos dois números é: ${subt}` )
alert(`A multiplicação dos dois números é: ${mult}` )
alert(`A divisão dos dois números é: ${div}` )
alert(`O resto da divisão dos dois números é: ${rest}` )



if (soma % 2 == 0){
    alert(`A soma dos dois números é: PAR` )
}else{
    alert(`A soma dos dois números é: IMPAR` )
}

if(num1 == num2){
    alert(`Os números inseridos são iguais` )

} else{
    alert(`Os números inseridos são diferentes` )
}