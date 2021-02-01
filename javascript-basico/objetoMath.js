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