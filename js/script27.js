alert("Calculando área residencial");

let opcao = 0
let area  = 0, largura = 0, comprimento = 0;
let nome;
let areaTotal = 0;

do{
    alert("Digite o número correspodente:\n\n> 1 Calcular área\n> 2 Sair e mostrar área total calculada\n");
    opcao = parseInt(prompt("O que deseja fazer: "));
    if (opcao == 1){
        nome = prompt("Nome do comodo: ");
        largura = parseFloat(prompt("Largura do comodo: "));
        comprimento = parseFloat(prompt("Comprimento do comodo: "));
        area = largura * comprimento;
        areaTotal += area;
    }
    else{
        alert("Àrea total: "+areaTotal+" m³");
    }
}
while(opcao != 2);