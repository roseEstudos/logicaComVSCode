alert("Somatória dos 500 primeiro números impares inteiros e positivos");

let contador, soma = 0;

for(contador = 1; contador <= 500; contador++){
    if (contador % 2 == 1){
        soma += contador;
    }
}

alert("Resultado da somatória: "+soma);