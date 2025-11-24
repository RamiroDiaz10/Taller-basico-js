// 1. Escribe un programa que pida al usuario ingresar un número, 
// luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.

let sum1 = parseInt(prompt("Ingrese un numero: "));
let sum2 = parseInt(prompt("Ingrese otro numero: "));

let resultado = sum1 + sum2;

if (isNaN(sum1) || isNaN(sum2)){
    console.log('!ERROR!solo se permiten numeros.');
    alert('!ERROR!solo se permiten numeros.');
}else{
    console.log(`el resultado de la suma entre: ${sum1} y ${sum2} es ${resultado}`);
    alert(`el resultado de la suma entre: ${sum1} y ${sum2} es ${resultado}`);
}
