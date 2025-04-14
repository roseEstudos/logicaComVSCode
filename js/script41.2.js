alert("Exibindo números pares de 0 a 20 - 2.0");

let contador, soma = 0;

for(contador = 0; contador <= 20; contador++){
    if (contador % 2 == 0){
        soma += contador;
        alert("No intervalo de 0 a 20: \n\nO número: "+contador+" é Par");
    }
    if (contador == 20){
        alert("Soma destes números pares: "+soma);
    }
}