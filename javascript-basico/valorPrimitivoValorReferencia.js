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

//Para realmente copiar o valor para o array é necessário
//fazer um spread [...]
let a2 = [4,5,6];
let b2 = [...a2];
console.log(a2, b2);
a2.push(7);

// Mesma coisa com objetos, mas o spread é entre chaves

const pessoa1 = {
    nome: 'Daniele',
    sobrenome: 'Moreira'
};
const pessoa2 = {...pessoa1};
pessoa1.nome = 'Jaqueline';
console.log(pessoa2);