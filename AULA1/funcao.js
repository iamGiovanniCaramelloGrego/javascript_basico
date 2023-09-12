var nome
var email
var num = 0
saldo = 1000
var saque = 0
var deposito = 0

 function sacar(saque){
    saldo = saldo - saque
    return saldo
 }

 function depositar(deposito){
    saldo = saldo + deposito
    return saldo
 }


 function escrever(quadro) {
    info = "Seja bem vindo: ";
    info = "Usuário número " + (++num) + "\n";
    info += "Nome: " + nome + "\n";
    info += "E-mail: " + email + "\n \n";;
    info += "Saldo inicial: " + saldo + "\n";
    info += "Saldo após sacar:" + sacar(saque) + "\n";
    info += "Saldo após depositar:" + depositar(deposito) + "\n \n";

    quadro.value += info;
 }