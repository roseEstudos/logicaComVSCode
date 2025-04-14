alert("Quadrado dos números ímpares entre 15 e 200");

let contador;

for(contador = 15; contador <= 200; contador++){
    if (contador % 2 == 1){
        alert("Número: "+contador+" - Seu quadrado: "+contador * contador);
    }
}