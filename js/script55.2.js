alert("Adivinhando número de 1 a 10 - 2.0");

let numSorteado = 3, num;

num = parseInt(prompt("tenta adivinhar o número sorteado entre 1 e 10: "));

while(num != numSorteado){
    if (num > numSorteado){
        num = parseInt(prompt("O número sorteado é menor.\n\nTente novamente:"));
    }
    else{
        num = parseInt(prompt("O número sorteado é maior.\n\nTente novamente:"));
    }
}
alert("Parabéns! Você acertou o número sorteado");