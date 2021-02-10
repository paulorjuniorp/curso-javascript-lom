/*
Primitivos (imutáveis) - string, number, boolean, undefined, null

Referência (mutável) - array, object, function
*/

let nome = 'Mundo';
nome[0] = 'F';

console.log(nome[0], nome);
// Os valores são copiados
let a = 'A';
let b = a;
console.log(a, b);
a = 'B';
console.log(a, b);
// Os valores são passados a partir de um mesmo endereço na memória
// por isso são mutáveis
let a1 = [1,2,3];
let b1 = a1;
console.log(a1, b1);
a1.push(4);
console.log(a1, b1);