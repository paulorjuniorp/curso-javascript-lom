let umaString = "Um \"texto\""; // \ invertida pode ser utilizado como caractere de escape
console.log(umaString);

let outraString = "Um texto";
console.log(outraString[4]);
console.log(outraString.charAt(6));
//retorna o começo de uma string
console.log(outraString.indexOf('texto'));
// retorna o começo de uma string de trás pra frente
console.log(outraString.lastIndexOf('x'));

console.log(outraString.match(/[a-z]/g));