function saudacao(nome){
    return `Hello, ${nome}!`;
}

saudacao("Juinu");

const variavel = saudacao('Latifa');

console.log(variavel);

function soma(x,y){
    const resultado = x + y;
    return resultado;
}

const somaValor = soma(2,9);
console.log(somaValor);

// é possível colocar valores padrão como parâmtro de uma função para os casos onde nenhum valor é passado pelo usuário

function multiplicar(x = 2, y =2){
    const resultado = x * y;
    return resultado;
}

const valorMulti = multiplicar();
console.log(valorMulti);
const outraMulti = multiplicar(5,3);
console.log(outraMulti);