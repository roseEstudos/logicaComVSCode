alert("fatorial do numeros impares de 1 a 10");

let num, fatorial, contador;

for(contador = 1; contador <= 10; contador++){
    if (contador % 2 == 0){
        fatorial = 1;
        for(num = 1; num <= contador; num++){
            fatorial *= num;
        }
        alert("Fatorial de: "+contador+" = "+fatorial);
    }
}