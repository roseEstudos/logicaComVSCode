alert("Fatorial Pares de 1 até 10");

let contador = 1, num;

do{
    if (contador % 2 == 0){
        let fatorial = 1;
        if(contador > 1){
            num = contador;
            do{
                fatorial = fatorial * num;
                num = num - 1;
            } while(num > 1);
        }
        alert("Fatorial de "+contador+" é: "+fatorial);
    }
    contador = contador + 1;
} while(contador < 10);