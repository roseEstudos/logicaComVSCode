alert("Sequência de fibonacci");

let num = 0, num1 = 1, contador, numAuxiliar;

for(contador = 1; contador <= 15; contador++){
    if (contador < 2){
        alert(num1);
    }
    else{
        numAuxiliar = num + num1;
        alert(numAuxiliar);
        num = num1;
        num1 = numAuxiliar
    }
}