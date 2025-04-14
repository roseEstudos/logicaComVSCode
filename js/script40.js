alert("Exibindo números impares de 0 a 20");

let contador;

for(contador = 0; contador <= 20; contador++){
    if (contador % 2 == 1){
        alert("No intervalo de 0 a 20: \n\nO número: "+contador+" é Ímpar");
    }
}