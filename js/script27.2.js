alert("Calculando área residencial");

// DECLARANDO VARIAVEÍS
let opcao = 0
let area  = 0, largura = 0, comprimento = 0;
let nome;
let areaTotal = 0;

// REALIZANDO O LAÇO DE REPETIÇÃO
do{
    alert("Digite o número correspodente:\n\n> 1 Calcular área\n> 2 Sair e mostrar área total calculada\n");
    opcao = parseInt(prompt("O que deseja fazer: "));
    if (opcao == 1){
        nome = prompt("Nome do comodo: ");
        largura = parseFloat(prompt("Largura do comodo: "));
        if (largura <= 0){
            alert("A largura deve ser um número positivo!");
            break;
        }
        comprimento = parseFloat(prompt("Comprimento do comodo: "));
        if (comprimento <= 0){
            alert("O comprimento deve ser um número positivo!");
            break;
        }
        area = largura * comprimento;
        areaTotal += area;
    }
    else if (opcao == 2){
        alert("Àrea total: "+areaTotal+" m³");
    }
    else{
        alert("Opção inválida")
    }
}
while(opcao != 2);