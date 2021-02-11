// Quando uma expressão lógica && encontra um primeiro false ela já retorna o false o OR é ao contrário
// Caso a expressão tenha mais de um valor ela retorna o primeiro false que encontrar o OR é ao contrário
// Se um expressão lógica tenha mais de um valor e todos true, ela retorna o ultimo true encontrado

console.log('Junior' && 0 && 'Paulo');
console.log(' ');
console.log('Paulo' && true && 'Júnior');

// São conhecidos como valor falso - FALSY
/* false
    '' ou "" ou ``
    null
    undefined
    NaN
*/

function falaOi(){
    return 'Oi';
}

let vaiExecutar = 'Juinu';

console.log(vaiExecutar && falaOi());

//Exemplo com OR
// Situação 1
const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao);

// Situação 2
const corUsuario1 = 'Vermelho';
const corPadrao1 = corUsuario1 || 'Preto';
console.log(corPadrao1);