alert("Crônometro 2.0");

let hora, minuto, cont1, cont2, segundo;

hora = parseInt(prompt("Digite a(s) hora(s): "));
minuto = parseInt(prompt("Digite o(s) minuto(s): "));

for(hora; hora >= 0; hora--){
    for(minuto; minuto >= 0; minuto--){
        for(segundo = 59; segundo >= 0; segundo--){
            alert("Tempo: "+hora+" : "+minuto+" : "+segundo);
            if (hora == 0 && minuto == 0 && segundo == 0){
                alert("BOOOOOOOM!");
            }
        }
    }
}