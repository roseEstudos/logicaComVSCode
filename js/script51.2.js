alert("Somatória dos 500 primeiro números pares inteiros e positivos");

let contador, soma = 0;

for(contador = 1; contador <= 500; contador++){
    if (contador % 2 == 0){
        soma += contador;
    }
}

alert("Resultado da somatória: "+soma);