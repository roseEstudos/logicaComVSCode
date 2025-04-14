alert("Somatória dos 500 primeiro números inteiros e positivos");

let contador, soma = 0;

for(contador = 1; contador <= 500; contador++){
    soma += contador;
}

alert("Resultado da somatória: "+soma);