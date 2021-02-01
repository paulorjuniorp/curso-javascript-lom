let num1 = 9.56838;
let outroNum1 = 9.446728;

// Arredonda o número float para o menor integer
let num2 = Math.floor(num1);
console.log(num2);

//Arredonda um número float para um integer maior que o valor
let num3 = Math.ceil(num1);
console.log(num3);

//Arredonda um número para cima caso o número após a virgula seja maior que 5
//Arredonda um número para baixo caso o número após a virgula seja menor que 5
let num4 = Math.round(num1);
console.log(num4);
let num5 = Math.round(outroNum1);
console.log(num5);

//Retorna o maior número de uma sequência
console.log(Math.max(1,2,3,4,1000,300,4000,50,-9000,-2));

//Gera um número aleatório
console.log(Math.random());

//Gerar um número aleatório em um intervalo.Ex: Entre 10 e 5
const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio);

//Realizar uma potência
console.log(Math.pow(2,10));