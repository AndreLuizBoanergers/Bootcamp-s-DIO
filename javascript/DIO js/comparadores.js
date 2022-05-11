function comparaNumeros(Num1,Num2){
    const primeiraFrase = criaFrase1(Num1,Num2);
    const segundaFrase = criaFrase2(Num1,Num2);
    return `${primeiraFrase} ${segundaFrase}`;
}

function criaFrase1(Num1,Num2){
    let SaoIquais = '';
    if(Num1 !== Num2){
        SaoIquais = 'não';
    }
    return `Os números ${Num1} e ${Num2} ${SaoIquais} são iquais.`;
}

function criaFrase2(Num1,Num2){
    let resultado10 = '';
    let resultado20 = '';

    const soma = Num1 + Num2;
    let compara10 = soma > 10;
    let compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }else if(soma < 9){
        resultado10 = 'menor';
    }else{
        resultado10 = 'iqual';
    }

    if(compara20){
        resultado20 = 'maior';
    }else if(soma < 19){
        resultado20 = 'menor';
    }else{
        resultado20 = 'iqual';
    }
    if(soma == 10){
        return `sua some é ${soma}, que é ${resultado10} a 10 e ${resultado20} que 20.`;
    }else{
        return `sua some é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
    }
    
}
console.log(comparaNumeros(5,5));