alert("Média do aluno");
let num1 = parseFloat(prompt("Digite primeira nota: "));
let num2 = parseFloat(prompt("Digite primeira nota: "));
let num3 = parseFloat(prompt("Digite primeira nota: "));
let num4 = parseFloat(prompt("Digite primeira nota: "));
let media = (num1 + num2 + num3 + num4) / 4 
if (media >= 5){
    alert("O aluno teve uma média de "+media+" e foi: Aprovado!");
}
else {
    alert("O aluno teve uma média de "+media+" e foi: Reprovado!");
}