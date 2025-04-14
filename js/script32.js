alert("Quadrado dos números entre 15 a 200");

let contador = 15;
let resultado;

do{
    resultado = contador * contador;
    alert("Valor do quadrado de "+contador+" é: "+resultado);
    contador ++;
} while(contador < 201)