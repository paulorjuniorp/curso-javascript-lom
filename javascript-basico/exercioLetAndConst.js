/*
Luis Otávio Miranda tem 32 anos, pesa 84kg, tem altura de 1.8
e seu IMC e ano de nascimento é?
*/

const name = 'Luis Otávio Miranda';
const age = 32;
const weigthInKg = 84;
const heigthInM = 1.80;

let bodyMassIndex = weigthInKg / (heigthInM * heigthInM);
let yearOfBirth = 2021 - age;

console.log(name, 'nasceu no ano de', yearOfBirth, 'e seu IMC é:', bodyMassIndex + '.');
