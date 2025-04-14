alert("Quadrado dos números pares entre 15 e 200");

let contador;

for(contador = 15; contador <= 200; contador++){
    if (contador % 2 == 0){
        alert("Número: "+contador+" - Seu quadrado: "+contador * contador);
    }
}