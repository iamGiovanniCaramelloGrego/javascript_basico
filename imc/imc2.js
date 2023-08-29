function calcular_imc(){

    
    var altura = document.imcForm.altura.value;
    var peso = document.imcForm. peso.value;

    var calculo = peso / (altura * altura);

    var resultado;

    if(calculo<18,5){
        resultado = "vc tá magrelo de acordo com indíce: " + calculo;
    }
    else if(calculo>=18.5 && calculo<24.9){
        resultado = "vc tá normal de acordo com indíce: " + calculo;
    }
    else if(calculo>=25 && calculo<29.9){
        resultado ="vc tá sobre peso de acordo com indíce: " + calculo;
    }
    else if(calculo>=30 && calculo<39.9){
        resultado = "vc tá com obesidade de acordo com indíce: " + calculo;
    }
    else if(calculo>40){
        resultado = "vc tá com obesidade grave de acordo com indíce: " + calculo;
    }

    document.getElementById('resul').innerHTML = resultado;
}