function calculadora_imc(){
    var altura = document.imcForm.altura.value;
    var peso = document.imcForm. peso.value;

    var calculo = (peso/(altura*altura));

    if(calculo<18,5){
        alert("vc tá magrelo de acordo com indíce: " + calculo);
    }
    else if(calculo>=18.5 && calculo<24.9){
        alert("vc tá normal de acordo com indíce: " + calculo);
    }
    else if(calculo>=25 && calculo<29.9){
        alert("vc tá sobre peso de acordo com indíce: " + calculo);
    }
    else if(calculo>=30 && calculo<39.9){
        alert("vc tá com obesidade de acordo com indíce: " + calculo);
    }
    else if(calculo>40){
        alert("vc tá com obesidade grave de acordo com indíce: " + calculo);
    }
}