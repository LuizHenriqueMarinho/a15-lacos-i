// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` 
// perguntando se a pessoa deseja comer mais coxinhas. 
// “S” deve representar “sim”, e “N” deve representar “não”. 
// Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, 
// e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, 
// devemos imprimir o valor total da conta.

let querCoxinha = "S"
let total = 0 
let qtd = 0
while(querCoxinha === "S")
{
    querCoxinha = prompt("quer mais uma coxinha por R$2,50? ").toLocaleUpperCase()
    qtd ++
    total+= Number(2.5)
}
console.log("quantidade de coxinhas: " + qtd + ". Valor total: R$" + total)