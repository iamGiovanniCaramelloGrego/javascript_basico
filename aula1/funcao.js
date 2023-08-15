var nome
var email
var num = 0;
saldo = 1000;
var saque =0;
var deposito =0;
function comretorno(saque){
    saldo = saldo - saque
    return saldo
}

function realizardeposito(deposito){
    saldo = saldo + deposito
    return saldo
}


function escrever(quadro){
    info = "Usuário número" + (++num) + "\n";
    info += "Nome: " + nome + "\n";
    info += "email: " + email + "\n";
    info += "saldo: " + comretorno(saque) + "\n \n"
    info += "deposito: " + realizardeposito(deposito) + "\n \n"
    quadro.value += info;
}