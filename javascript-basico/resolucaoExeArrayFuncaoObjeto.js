function meuEscopo(){
    const form = document.querySelector('.form');

    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
            recebePessoa(){
                return `${this.nome}, ${this.sobrenome}, ${this.peso},${this.altura}`
            }
        };
        let adicionaPessoa = pessoa.recebePessoa();
        pessoas.push(adicionaPessoa);
        console.log(pessoas);

        resultado.innerHTML += `<p style="body{color: blue;}">${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();