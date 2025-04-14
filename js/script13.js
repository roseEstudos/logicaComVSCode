alert("Anos em dias de vida");
let anos = parseInt(prompt("Quantos anos você tem?"));
let meses = parseInt(prompt("Quantos meses se passaram depois do seu aniversário?"));
let dias = parseInt(prompt("Quantos dias se passaram depois do seu aniversário?"));
let diasDeVida = anos * 365 + meses * 30 + dias;
alert("Você possuí ao total "+ diasDeVida + " dias de vida");