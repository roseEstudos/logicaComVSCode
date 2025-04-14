alert("Somando números Impares entre 1 e 500");

let contador = 1;
let resultado = 0;

do{
    if (contador % 2 == 1){
        resultado += contador;
    }
    contador ++;
} while(contador < 501);
alert("Resultado da soma: "+resultado);