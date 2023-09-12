function calcula_imc(){
    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;

    var calculo = (peso/(altura*altura));

    if(calculo<18.5){
        alert("Voce está magro com esse indice: " + calculo);
    }
    else if(calculo>=18.5 && calculo<24.9){
        alert("Voce está normal com esse indice: " + calculo);
    }
    else if(calculo>=25 && calculo<29.9) {
        alert("voce está com sobre peso com esse indice: " + calculo);
    }
    else if(calculo>=30 && calculo<39.9) {
        alert("voce está com obesidade com esse indice: " + calculo);
    }
    else if(calculo>40) {
        alert("voce está com obesidade grave com esse indice: " + calculo);
    }

}