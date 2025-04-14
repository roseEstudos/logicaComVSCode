alert("Somando números Impares entre 1 e 500 2.0");

let contador = 1;
let resultado = 0;
let qtdNum = 0;

do{
    if (contador % 2 == 1){
        resultado += contador;
        qtdNum ++;
    }
    contador ++;
} while(contador < 501);
alert("Resultado da soma: "+resultado+"\n\nQuantidade de números Impares: "+qtdNum);