// 5. Escribe un programa que le pida al usuario ingresar una frase.
//  El programa debe imprimir la frase en la consola 10 veces.
const prompt = require('prompt-sync')();
const frase = prompt('escribe lo que quieras: ');

for( i = 1; i <= 10; i++ ) {
    console.log(i, frase);
    
}