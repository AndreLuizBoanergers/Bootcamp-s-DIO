function calculadora(){
    const operacao = Number(prompt('Escolha a operacão: \n 1 - Soma (+)\n 2 - Subtracão (-)\n 3 - Multiplicação (*)\n 4 - Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)\n'));

   
    if(!operacao || operacao > 7){
        alert("Operação Invalida!")
        calculadora();
    }else{
        let n1 = Number(prompt('Insira primeiro valor: '));
        let n2 = Number(prompt('Insira segundo valor: '));
        let resultado;
        if(!n1 || !n2){
            alert('Erro - Parametros Invalidos!')
            calculadora()
        }else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1}+${n2}= ${resultado}`);
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1}-${n2}= ${resultado}`);
            }
            function multiplicacao(){
                resultado = n1 + n2;
                alert(`${n1}*${n2}= ${resultado}`);
            }
            function real(){
                resultado = n1 / n2;
                alert(`${n1}/${n2}= ${resultado}`);
            }
            function divisao(){
                resultado = n1 % n2;
                alert(` O resto  de ${n1}%${n2}= ${resultado}`);
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1}**${n2}= ${resultado}`);
            }
                
            //if(operacao == 1){
            //    soma();
            //}else if(operacao == 2){
            //    subtracao();
            // }else if(operacao == 3){
            //    multiplicacao();
            //}else if(operacao == 4){
            //    real();
            //}else if(operacao == 5){
            //    divisao();
            //}else{
            //    potenciacao();
            //}
            
            switch(operacao){
                case 1:
                    soma()
                    break;
                case 2:
                    subtracao()
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    real();
                    break;
                case 5:
                    divisao();
                    break;
                case 6:
                    potenciacao();
                    break;
          }
        }
    }
}
calculadora()
const NovaOperacao = Number(prompt('Deseja Fazer uma nova operaçao:\n  1 - SIM\n 2 - Não'))
if(NovaOperacao == 1){
    calculadora()
}else{
    alert("Ate mais!")
}
