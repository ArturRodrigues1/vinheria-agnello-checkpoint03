let nome1, tipo1, safra1, quant1;
let nome2, tipo2, safra2, quant2;
let nome3, tipo3, safra3, quant3;
let nome4, tipo4, safra4, quant4;
let nome5, tipo5, safra5, quant5;
let nome6, tipo6, safra6, quant6;
let nome7, tipo7, safra7, quant7;
let nome8, tipo8, safra8, quant8;
let nome9, tipo9, safra9, quant9;
let nome10, tipo10, safra10, quant10;

function validarEntrada(mensagem) {
    let entrada;
    do {
    entrada = prompt(mensagem);
    } while (entrada === null || entrada.trim() === "");
    return entrada;
}

function estoqueBaixo(quantidade) {
    return quantidade < 5;
}


