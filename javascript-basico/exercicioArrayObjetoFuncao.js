function meuEscopo(){
    const form = document.querySelector('.form');

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(nome.value, sobrenome, peso, altura);
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();