alert("Tabuada até a que o usuário decidir");

let contador, num, num1;

num = parseInt(prompt("Até qual tabuada você deseja ver: "));

for(num1 = 1; num1 <= num; num1++){
    for(contador = 1; contador < 11; contador++){
        alert(num1+" X "+contador+" = "+num1*contador);
    }
}