let umaString = "Um \"texto\""; // \ invertida pode ser utilizado como caractere de escape
console.log(umaString);

let outraString = "Um texto";

let maisUmaString = "O rato roeu a roupa do rei de Roma";

console.log(outraString[4]);
console.log(outraString.charAt(6));
//retorna o começo de uma string
console.log(outraString.indexOf('texto'));
// retorna o começo de uma string de trás pra frente
console.log(outraString.lastIndexOf('x'));
//expressões regulares

//retorna os caracteres minusculos
console.log(outraString.match(/[a-z]/g));

//retorna a posição do x na string
console.log(outraString.search(/[x]/g));

//Troca o primeiro parâmetro pelo segundo em uma string
console.log(outraString.replace('Um', 'Outro'));

//replaca utilizando expressões regulares
console.log(maisUmaString.replace(/r/g,'l'));

//retorna o tamanho da string
console.log(maisUmaString.length);

//retorna uma parte da string
console.log(maisUmaString.slice(2,6));

//retorna a divisão da string retirando um caractere
console.log(maisUmaString.split(' '));

// Passa uma quantidade de retiradas de caractere da String
console.log(maisUmaString.split(' ', 3));

//retorna a string com todas as letras maiúsculas
console.log(maisUmaString.toUpperCase());

//retorna a string com todas as letras minúsculas
console.log(maisUmaString.toLowerCase());

