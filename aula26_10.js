// Aula dia 26.10 - Exercício calculadora

//soma

function adicionar(num1, num2, num3){
    const soma = num1 + num2 + num3;
    return soma;
}
const soma = adicionar(1,2,3);
console.log(soma);

//subtração

function subtrair(num1, num2){
    const subtracao = num1 - num2;
    return subtracao;
}
const subtracao = subtrair(1,2);
console.log(subtracao);

// multiplicação

function multi(num1, num2){
    const multipicacao = num1 * num2;
    return multipicacao;
}
const multipicacao = multi(1,2);
console.log(multipicacao);

// divisão


function dividir(num1, num2){
    const divisao = num1 / num2;
    return divisao;
}
const divisao = dividir(0,6);
console.log(divisao);

//quadrado do número

function potencia(number){
    return number**number;
}

console.log(potencia(2))

//média de três números

function mediaNumeros(num1, num2, num3){
    return (num1 + num2 + num3)/3;
}

console.log(mediaNumeros(3,2,1))

//porcentagem

function porcentagem(num1, num2){
    return (num1*num2)/100;
}

console.log(porcentagem(100,10))

//gerador de porcentagem

function gerador(num1, num2){
    return (num1*100)/num2;
}
console.log(gerador(2,5400))