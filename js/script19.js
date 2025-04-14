alert("Média do aluno 2.0");
let nota1 = parseFloat(prompt("Digite primeira nota: "));
let nota2 = parseFloat(prompt("Digite segunda nota: "));
let nota3 = parseFloat(prompt("Digite terceira nota: "));
let nota4 = parseFloat(prompt("Digite quarta nota: "));
let media = (nota1 + nota2 + nota3 + nota4) / 4 
if (media >= 7){
    alert("O aluno teve uma média de "+media.toFixed(2)+" e foi: Aprovado!");
}
else {
    let novaMedia, nota5;
    alert("O aluno tve uma média muito baixa, mas tem uma segunda chance");
    nota5 = parseFloat(prompt("Digite o valor da nota no exame"));
    novaMedia = (media + nota5) / 2
    if (novaMedia >= 5){
        alert("O aluno teve uma média de "+novaMedia.toFixed(2)+" e foi: Aprovado devido a nota do exame!");
    }
    else{
        alert("O aluno teve uma média de "+novaMedia.toFixed(2)+" e foi: Reprovado mesmo com a nota do exame!");
    } 
}