alert("Potência de 3, tendo como expoente os números entre 0 e 15");

let pontencia, base = 3, expoente, contador;

for(expoente = 0; expoente <= 15; expoente++){
    if (expoente == 0){
        alert(base+" ^ " + expoente+ " = 1");
    }
    else{
        pontencia = 1;
        for(contador = 1; contador <= expoente; contador++){
            pontencia *= base;
        }
        alert(base+" ^ " +expoente+ " = "+pontencia);
    }
}