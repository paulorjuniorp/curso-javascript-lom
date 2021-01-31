let nomeUsuario = prompt('Digite seu nome');
console.log(nomeUsuario);

document.body.innerHTML += `O seu nome é ${nomeUsuario} <br />` + '<br>'
document.body.innerHTML += `Seu nome tem ${nomeUsuario.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nomeUsuario.charAt(1)} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra u no seu nome? ${nomeUsuario.indexOf('u')} <br />`;
document.body.innerHTML += `Qual o último índice da letra u no seu nome? ${nomeUsuario.lastIndexOf('u')} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nomeUsuario.slice(-3)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nomeUsuario.split(' ')} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeUsuario.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas ${nomeUsuario.toLowerCase()} <br />`;
