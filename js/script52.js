alert("Somatória dos 100 primeiros números inteiros e positivos");

let contador, soma = 0;

for(contador = 1; contador <= 100; contador++){
    soma += contador;
}

alert("Resultado da somatória: "+soma);