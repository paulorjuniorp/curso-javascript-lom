//Operadores aritméticos
// + - * /
// ** potenciação
// % resto de uma divisão
// Precedência de operadores no cálculo: (), **, * /, + -

const num1 = 20;
const num2 = 30;

console.log(num1 + num2);

let contador = 1;
console.log(contador++); // faz a soma após a ação
console.log(++contador);//primeiro faz a soma e depois outra ação

console.log(contador--); // faz a soma após a ação
console.log(--contador);

let contador1 = 1;

contador +=2;// igual a contador = contador + 2
console.log(contador);
contador *=2;// igual a contador = contador * 2
console.log(contador);
contador /=2;// igual a contador = contador / 2
console.log(contador);
contador **= 2;// igual a contador = contador ** 2
console.log(contador);

//NaN = Not a Number, parseInt, parseFloat, Number

const num10 = 10;
let num20 = "20";
let num30 = '3.25';

console.log(num10 + num20);

num20 = parseInt(num20);
console.log(num10 + num20);

num30 = Number(num30);
console.log(num30 * num10);