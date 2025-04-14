alert("Adivinhando número de 1 a 10");

let numSorteado = 3, num;

num = parseInt(prompt("tenta adivinhar o número sorteado entre 1 e 10: "));

while(num != numSorteado){
    num = parseInt(prompt("Tente novamente: "));
}
alert("Parabéns! Você acertou o número sorteado");