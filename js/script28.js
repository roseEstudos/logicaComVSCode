alert("Divião de número inteiros");

let dividendo, divisor, quociente = 0;

dividendo = parseInt(prompt("Digite o valor do dividendo: "));
divisor = parseInt(prompt("Digite o valor do divisor: "));
if (divisor <= 0){
    alert("O divisor deve ser um número positivo.");
} 
else{
    do{
        dividendo = dividendo - divisor;
        quociente += 1;
    } while (dividendo >= divisor);
}
alert("Quociente inteiro da divisão: "+quociente);