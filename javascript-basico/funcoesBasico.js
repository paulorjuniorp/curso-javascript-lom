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

//Função anônima, é necessário colocar um ponto e virgula no final
const raiz = function(n){
     const resultado = Math.sqrt(n);
     return resultado;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


// Arrow function, inicialmente parece ser a mesma coisa da função anônima, porém tem mais liberdade de sintaxe
const subtracao = (n,m) => {
    return (n/m);
};

console.log(subtracao(4,2));

const numeroDuplicado = n => n*2;

console.log(numeroDuplicado(3));