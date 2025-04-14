alert("Módulo de um número");
let num = parseInt(prompt("Digite um número: "));
let modulo;
if (num > 0){
    alert("O módulo do número "+num+" é: "+num);
}
else {
    modulo = num * -1;
    alert("O módulo do número "+num+" é: "+modulo);
}