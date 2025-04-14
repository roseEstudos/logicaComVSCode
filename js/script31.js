alert("Número Maior e número menor\n\nObs.: digite um número negativo para poder ver o resultado");

let num; 
let numMaior = -99999;
let numMenor = 99999;

do{
    num = parseInt(prompt("Digite um número inteiro: "));
    if (num >= 0){
        if (num > numMaior){
            numMaior = num;
        }
        if (num < numMenor){
            numMenor = num;
        }
    }
} while(num >= 0)

alert("Maior número: "+numMaior+"\n\nMenor número: "+numMenor);