alert("Calculando área residencial");

let opcao = "sim", nome;
let area = 0, areaTotal = 0, largura, comprimento;

while (opcao.toLowerCase() != "não"){
    nome = prompt("Nome do cômodo: ");
    largura = parseFloat(prompt("Largura do cômodo: "));
    comprimento = parseFloat(prompt("Comprimento do cômodo: "));
    area = largura * comprimento;
    areaTotal += area;
    opcao = prompt("Deseja calcular outro cômodo?\n\n-------------- Digite 'sim' ou 'não' --------------");
}
alert("A área total da residência é: "+areaTotal+" cm³");