// # Exercício 2

// Crie um programa que peça um input de número para o usuário. 
// Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```

let num = Number(prompt("digite um número"))
for(let i = 0; i<10; i++)
{
    console.log(num + " x " + (i+1) + " = " + ((i+1) * num))
}