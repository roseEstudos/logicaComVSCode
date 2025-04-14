alert("Tabuada do 1 até o 10");

let num, contador;

for (num = 1; num < 11; num++){
    alert("Tabuada do: "+num);
    for(contador = 1; contador < 11; contador++){
        alert(num+" X "+contador+" = "+num*contador);
    }
}