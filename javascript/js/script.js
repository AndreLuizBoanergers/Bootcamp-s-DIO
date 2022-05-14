var number = document.getElementById('number');
const subtrair = document.getElementById('subtrair');
const adicionar = document.getElementById('adicionar');
var numberInit = 0;
function incremento(){
    if(numberInit<10){
        numberInit = numberInit + 1;
        number.innerHTML = numberInit;
    }
}
function decremento(){
    if(numberInit>0){
        numberInit = numberInit - 1;
        number.innerHTML = numberInit;
    }
}
adicionar.addEventListener('click',incremento);
subtrair.addEventListener('click',decremento);


