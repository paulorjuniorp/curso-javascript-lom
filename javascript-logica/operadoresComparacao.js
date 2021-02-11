// Operador maior que
console.log(10 > 5);

const valor = 20 > 4;
console.log(valor);

// Operador Maior que ou igual a
console.log(10 >= 5);

const valor1 = 20 >= 4;
console.log(valor1);

// Operador Menor que ou igual a
console.log(5 <= 10);

const valor2 = 20 <= 4;
console.log(valor2);

// Operador igual ==

const num1 = 10;
const num2 = 10;
const valor3 = num1 == num2;
console.log(valor3);
// O problema é que mesmo que os valores sejam iguais, mas o tipo seja diferente ele retorna true
const num3 = 20;
const num4 = '20';
const valor4 = num3 == num4;
console.log(valor4);

// Operador igual === resolve o problema do == que mesmo que o valor seja igual, mas o tipo seja diferente
// ele retorna o false
const num5 = '10';
const num6 = 10;
const valor5 = num5 === num6;
console.log(valor5);

// Operador de diferença !==

const num7 = '10';
const num8 = 10;
const valor6 = num7 !== num8;
console.log(valor6);