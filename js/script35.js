alert("Somando Grãos em um tabuleiro");

let contador = 1;
let graos = 1;
let graosTotais = 0;

do{
    graos = graos * 2;
    graosTotais += graos;
    contador ++;
} while(contador < 64);
alert("Total de grãos: "+graosTotais);