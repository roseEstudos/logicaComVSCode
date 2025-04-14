alert("Conversão de Fahrenheit para Celsius");

let tempFah = 0, tempCel = 0, contador = 10, grauFah = 10, grauCel = 10;

while(contador <= 100){
    tempFah = (9 * grauCel + 160) / 5;
    tempCel = (5 * (grauFah - 32)) / 9;

    alert("======== Fahrenheit para Celsius =========\n\n"+
        "Temperatura Fahrenheit: "+grauFah+"ºF\n"+
        "Convertida para Celsius: "+tempFah.toFixed(2)+"ºC\n\n"+
        "Temperatura Celsius: "+grauCel+"ºC\n"+
        "Convertida para Fahrenheit: "+tempCel.toFixed(2)+"ºF"
    );
    
    contador += 10;
    grauFah = contador;
    grauCel = contador;
}