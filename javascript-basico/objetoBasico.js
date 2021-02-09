const array = [1, 2, 3];

// Com o const os valores dentro dos colchetes podem ser alterados, porém tirar os colchetes
// e atribuir um novo valor não pode. Ex: const array = [1,2,2] => array = 123 não pode ser feito;

//objeto
const pessoa = {
    nome: "João",
    sobrenome: "Oliveira",
    idade: "7"
};

// Para facilitar e automatizar a criação de objetos, é possível criar uma função que faça tudo uma única vez

function criarPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa1 = criarPessoa("Luiza", "Santos", 20);
console.log(pessoa1.nome);

// Em um objeto é possível criar uma função e dentro da função utilizar os elementos do objeto a partir
// do comando this

const pessoa2 = {
    nome: 'Jéssica',
    sobrenome: 'Oliveira',
    idade: 23,

    profissao(){
        console.log(`${this.nome} ${this.sobrenome} tem apenas ${this.idade} anos de idade e já é médica`);
    }
};

pessoa2.profissao();

const pessoa3 = {
    nome: 'Luana',
    sobrenome: 'Araújo',
    idade: 32,
    fala(){
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos de idade`);
    },
    incrementaIdade(){
        this.idade++;
    }
};

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();