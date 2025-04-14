alert("Crônometro");

let hora, minuto, segundo;

for (hora = 23; hora != 0; hora--){
    for(minuto = 59; minuto != 0; minuto--){
        for(segundo = 59; segundo != 0; segundo--){
            alert("Hora "+hora+" : "+minuto+" : "+segundo);
        }
    }
}