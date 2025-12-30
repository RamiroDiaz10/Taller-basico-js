// 9. Escribe un programa que:
//     - Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el
//  número que el usuario ingrese (incluyéndolo)
//     - Elimine el segundo elemento.
//     - Recorra e imprima el arreglo.

//     Ejemplo:

//     ``` JavaScript
//         Ingresa un número> 5
//         1
//         3
//         4
//         5
//     ```

//     NOTA: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase.
  
const num = Number(prompt( 'ingrese un numero para dimensionar la lista: '));
const lista = [];

for ( i = 1; i <= num; i++ ){
    lista.push(i);
} 

lista.splice(1,1);
console.log(lista);

for ( i = 0; i <= lista.length; i++){
     console.log(lista[i]);
}




