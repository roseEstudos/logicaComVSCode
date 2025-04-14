alert("Somando números entre 1 e 500");

let contador = 1;
let resultado = 0;
let somaPar = 0, somaImpar = 0;

do{
    if (contador % 2 == 0){
        somaPar += contador
    }
    else{
        somaImpar += contador
    }
    resultado += contador;
    contador ++;
} while(contador < 501);
alert("Resultado da soma total: "+resultado+"\n\n> Resultado da soma dos número pares: "+somaPar+"\n> Resultado da soma dos números impares: "+somaImpar);