alert('Oi mundo');

let confirma = confirm('Vai sair?');
console.log(confirma);
let nome = prompt('Então qual o seu nome?');
console.log(nome);

let num1 = prompt("Digite um número");
let num2 = prompt("Digite um número");

num1 = Number(num1);
num2 = Number(num2);

let resultado = num1 + num2;

console.log("A soma de",num1,"+",num2,`é ${resultado}`);