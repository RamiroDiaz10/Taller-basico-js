// 6. Escribe un programa que le pida al usuario una frase y un número. 
// El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.
    // Por ejemplo, si el usuario ingresó la frase `Hola Mundo` 
    // y el número 5, el programa debe imprimir `Hola Mundo` 5 veces:
const prompt = require('prompt-sync')();
const frase = prompt( 'escribe lo que quieras: ' );
const num = Number(prompt('escribe un numero: '));

for( i = 1; i <= num; i++){
    console.log(i, frase);
}