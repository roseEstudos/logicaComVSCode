alert("Diferença de número maior pelo menor");
let num1 = parseInt(prompt("Digite um número: "));
let num2 = parseInt(prompt("Digite outro número: "));
let diferenca;
if (num1 > num2){
    diferenca = num1 - num2;
    alert("O número maior é o: "+num1+", tendo uma diferença de: "+diferenca)
}
else if (num2 > num1){
    diferenca = num2 - num1;
    alert("O número maior é o: "+num2+", tendo uma diferença de: "+diferenca)
}
else{
    alert("Não foi possível calcular a diferença")
}