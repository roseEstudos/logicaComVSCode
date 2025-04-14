alert("Exemplo Switch Case");
let numero = parseInt(prompt("Digite um valor: "));
switch (numero) {
    case 1:
        alert("Você digitou o valor 1");
        alert("Domingo");
        break;
    case 2:
        alert("Você digitou o valor 2");
        alert("Segunda-feira");
        break;
    case 3:
        alert("Você digitou o valor 3");
        alert("Terça-feira");
        break;
    case 4:
        alert("Você digitou o valor 4");
        alert("Quarta-feira");
        break;
    case 5:
        alert("Você digitou o valor 5");
        alert("Quinta-feira");
        break;
    case 6:
        alert("Você digitou o valor 6");
        alert("Sexta-feira");
        break;
    case 7:
        alert("Você digitou o valor 7");
        alert("Sábado");
        break;
    default:
        alert("Você digitou "+numero);
        alert("Ele é inválido")
}