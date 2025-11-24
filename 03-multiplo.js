// 3. Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.

    // Si es múltiplo debe imprimir `Si, el número x es múltiplo 5`, de lo contrario debe imprimir `No, 
    // el número x no es múltiplo de 5`.

let num;


do{
    num = Number(prompt("escribe numero: "));
    if(isNaN(num)){
        alert("solo numeros");
        continue;
    }
}while(isNaN(num));

    if(num % 5 === 0){
        console.log(`${num}, si es multiplo de 5`);
        alert(`${num}, si es multiplo de 5`);
        
    }else{
        console.log(`${num}, no es multiplo de 5`);
        alert(`${num}, no es multiplo de 5`);
        
    }
