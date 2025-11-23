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
