// Expressão AND &&
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("_______________________________________________________");

//Expressão OR ||
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(" ");

//Expressão NOT !

console.log(!true);
console.log(!false);

// Exemplo de aplicação

const usuario = 'Rosangela';
const senha = 12345;

const vaiLogar = usuario === 'Rosangela' && senha === 12345;
if(vaiLogar){
    console.log(`Usuário: ${usuario} logou no sistema`);
}else{
    console.log('Usuário ou senhas incorretas');
}