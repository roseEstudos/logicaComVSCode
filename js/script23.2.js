alert("Meses do ano");
let mes = parseInt(prompt("Digite um valor: "));
switch (mes) {
    case 1:
        alert(mes + "º mês -> Janeiro")
        break;
    case 2:
        alert(mes + "º mês -> Fevereiro")
        break;
    case 3:
        alert(mes + "º mês -> Março")
        break;
    case 4:
        alert(mes + "º mês -> Abril")
        break;
    case 5:
        alert(mes + "º mês -> Maio")
        break;
    case 6:
        alert(mes + "º mês -> Junho")
        break;
    case 7:
        alert(mes + "º mês -> Julho");
        break;
    case 8:
        alert(mes + "º mês -> Agosto")
        break;
    case 9:
        alert(mes + "º mês -> Setembro")
        break;
    case 10:
        alert(mes + "º mês -> Outubro");
        break;
    case 11:
        alert(mes + "º mês -> Novembro")
        break;
    case 12:
        alert(mes + "º mês -> Dezembro");
        break;
    default:
        alert("Você digitou " + mes);
        alert("Ele é inválido")
}