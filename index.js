const NOME = 'José ';
let idade = 27;
let peso = 80;
let altura = 1.5
let plano = true;
let imc = peso/altura**2;

console.log(true + true)

function calcImc(peso, altura){
    const IMC = peso/altura**2;
    console.log(imc);
}

calcImc(80, 1.5);

function soma(num1=0, num2=0, num3=0){
    const resultado = num1 + num2 + num3;
    return resultado;
}
const retorno = soma(1,2,3);
console.log(retorno);
