alert("Soma e Média aritmética\n\nObs.: Digite um número negativo para ver o resultado");

let contador = 0;
let media;
let num;
let soma = 0;

do{
    num = parseFloat(prompt("Digite um valor: "));
    if (num > 0){
        soma += num;
        contador ++;
    }
} while(num > 0);

if (soma <= 0){
    alert("Não foi possível realizar o cálculo, tente novamente.");
}
else{
    media = soma / contador;
    alert("Soma: "+soma+"\n\nMédia: "+media);
}