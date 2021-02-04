const alunos = ['Luiz','Maria','João'];
console.log(alunos);

// Se não existe o valor o array cria o índice e adiciona o elemento
alunos[3] = 'Luiza';
console.log(alunos);

//saber o tamanho do array
console.log(alunos.length);

//Uma das formas de adicionar um elemento no final de um array
alunos[alunos.length] = 'Marcia';
alunos[alunos.length] = 'José';
alunos[alunos.length] = 'Luana';
console.log(alunos);

// melhor forma de adicionar um elemento no final de um array
alunos.push('Fábio');
console.log(alunos);

//Adiciona um elemento no começo do array
alunos.unshift('Amy');
console.log(alunos);

//exclui o ultimo elemento do array
alunos.pop();
console.log(alunos);

// Pode-se salvar o valor excluído em uma variável
const removido = alunos.pop();
console.log(removido);

//excluir o primeiro elemento do array
alunos.shift();
console.log(alunos);

// Remove um ítem sem alterar os índices, porém deixa um espaço vazio no array
delete alunos[4];
console.log(alunos);

// Selecionar um determinado intervalo de elementos de um array
console.log(alunos.slice(0,3));

//Selecionando um intervalo de elementos com um valor negativo
console.log(alunos.slice(0,-2));

//Retorna o tipo array
console.log(typeof alunos);

//retorna se é um array
console.log(alunos instanceof Array);