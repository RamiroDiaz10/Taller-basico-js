// 4. Escribe un programa que le pida al usuario ingresar un número.
//    - Si el número es múltiplo de 3 debe imprimir en la consola `bing`.
//    - Si el número es múltiplo de 5 debe imprimir en la consola `bong`.
//    - Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola `bingbong`.
//    - Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.
let num;
let text = '';

do{
    num = Number(prompt('ingrese un numero: '));
    if(isNaN(num)){
        alert('solo numeros');
        console.log('solo numeros');
        continue;
    }
}while(isNaN(num));

    if (num % 3 === 0 )
        text +='bing';
        
    if(num % 5 === 0)
        text +='bong';
        
    if(!text){
        alert(`${num}, no multiplo`);
        console.log(`${num}, no multiplo`);
    }else
        alert(text);
        console.log(text);
        
    
