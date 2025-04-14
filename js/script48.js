alert("Potência e expoente");

let pontencia = 1, base, expoente, contador;

expoente = parseInt(prompt("Digite o valor do expoente: "));
base = parseInt(prompt("Digite o valor da base: "));


if (expoente == 0){
    alert(base+" ^ " + expoente+ " = 1");
}
else if (expoente > 0){
    for(contador = 1; contador <= expoente; contador++){
        pontencia *= base;
    }
    alert(base+" ^ " +expoente+ " = "+pontencia);
}
else{
    alert("O expoente deve ser um valor inteiro positivo");
}