let sum1;
let sum2;

do {
    sum1 = parseFloat(prompt('isngrese un numero: '));
    if(isNaN(sum1)){
        console.log("error, solo numeros");
        alert('solo numeros');
        continue;
    }
    

    sum2 = parseFloat(prompt('isngrese otro numero: '));
    if (isNaN(sum2)){
        console.log("error, solo numeros");
        alert("solo numeros");
        continue;
    }


        
}while(isNaN(sum1) || isNaN(sum2));

    let resultado = sum1 + sum2;

    alert(`El resultado de la suma entre ${sum1} y ${sum2} es ${resultado}`);
    console.log(`El resultado de la suma entre ${sum1} y ${sum2} es ${resultado}`);

        