// 7. Escribe un programa para la consola que le pida al usuario dos números e imprima 
// en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer 
// número y 10 como segundo número, el programa debe imprimir:

//     ``` JavaScript
//     5
//     6
//     7
//     8
//     9
//     10
//     ```

//     NOTA:
//        - Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.
//        - Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.
const prompt = require('prompt-sync')();
const num = Number(prompt('ingrese el numero: '));
const rango = Number(prompt('ingrese el rango: '));

if (num < rango){
    for( i = num; i<= rango; i++){
        console.log(i);
    }

}else{
    for( k = num; k >= rango ; k--){
        console.log(k);
    }
}