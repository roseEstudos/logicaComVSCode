alert("Somatória dos 100 primeiros números pares inteiros e positivos");

let contador, soma = 0;

for(contador = 1; contador <= 100; contador++){
    if (contador % 2 == 0){
        soma += contador;
    }
}

alert("Resultado da somatória: "+soma);