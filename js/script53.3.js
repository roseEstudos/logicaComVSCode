alert("Tabuada que o usuário escolher");

let contador, num;

num = parseInt(prompt("Qual tabuada deseja ver: "));

for(contador = 1; contador < 11; contador++){
    alert(num+" X "+contador+" = "+contador*num);
}