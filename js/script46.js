alert("Números de 1 a 200 que são divisíveis por 4");

let contador;

for(contador = 1; contador <= 200; contador++){
    if (contador % 4 == 0){
        alert("O número: "+contador+" é disível por 4");
    }
}