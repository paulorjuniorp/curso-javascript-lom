const form = document.querySelector("#formulario");

form.addEventListener("submit", function(evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector("#peso");
    const inputAltura = evento.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado("O valor do peso está invalido!", false);
        return;
    }

    if(!altura){
        setResultado("O valor da altura está invalido!", false);
        return;
    }

    const imc = getIMC(peso, altura);
    const resultadoIMC = getResultadoIMC(imc);
    const estruturaMensagem = `Seu IMC é de ${imc} (${resultadoIMC}).`;
    setResultado(estruturaMensagem, true);
});

function getIMC(peso, altura){
    const imcCalculo = peso/(altura * altura);
    return imcCalculo.toFixed(2);
}

function getResultadoIMC(imc){
    const resultado = ['Abaixo do peso',
                        'Peso normal',
                        'Sobrepeso',
                        'Obesidade grau 1',
                        'Obesidade grau 2',
                        'Obesidade grau 3']

    if(imc > 39.9) return resultado[5]
    if(imc >= 35) return resultado[4]
    if(imc >= 30) return resultado[3]
    if(imc >= 25) return resultado[2]
    if(imc >= 18.5) return resultado[1]
    else return resultado[0]
}

function paragraphCreate(){
    const paragraph = document.createElement('p');
    return paragraph;
}

function setResultado(mensagem, isValid){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';

    const paragraph = paragraphCreate();
    paragraph.innerHTML = mensagem;

    resultado.appendChild(paragraph);

    if(isValid) paragraph.classList.add("resultado-valido");
    else paragraph.classList.add("resultado-invalido");
}