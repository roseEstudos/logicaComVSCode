alert("Somando o fatoria de 15 números");

let contador = 1;
let fatorial;
let somatoria = 0;
let num;

do{
    num = parseInt(prompt("Digite o "+contador+"º número: "));
    fatorial = 1;
    do{
        if (num >= 1){
            fatorial *= num;
            num --;
        }
    } while(num >= 1)
    somatoria += fatorial;
    contador ++;
} while(contador < 16);
alert("Resultado: "+somatoria);