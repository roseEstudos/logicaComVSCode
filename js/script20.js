alert("Equação 2º Grau");
let valorA = parseFloat(prompt("Digite o valor de A: "));
let valorB = parseFloat(prompt("Digite o valor de B: "));
let valorC = parseFloat(prompt("Digite o valor de C: "));
let raiz1, raiz2;
let delta = (valorB**2) - (4 * valorA * valorC);

if (delta > 0){
    raiz1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
    raiz2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
    alert("As razíes são:");
    alert("Raiz 1: "+raiz1.toFixed(2));
    alert("Raiz 2: "+raiz2.toFixed(2));
}
else if (delta == 0){
   raiz1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
   alert("Raiz única: "+raiz1);
}
else{
    alert("A Equação não possí raízes");
}