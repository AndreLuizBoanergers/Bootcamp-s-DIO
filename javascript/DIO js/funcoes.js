//fUNCAO AUTOINVOCAVEL
(
    function(){
        let name = "DIO";
        return name;
    }
)();
//Callbacks
const calc = function(operacao, num1, num2){
    return operacao(num1,num2);
}
const soma = function(num1,num2){
    return num1 + num2;
}
const sub = function(num1,num2){
    return num1 - num2;
}
const resultSoma = calc(soma,1,2); // 3
const resultSub = calc(sub,1,2); // -1

console.log(resultSoma);
console.log(resultSub);
// arrays e objetos
function sum(x,y,z){
    return x + y + z;
}
const numbers = [1,2,3];
console.log(sum(...numbers));

function comfereTamanho(...args){
    console.log(args.length);
}
 confereTamanho(); // 0
 comfereTamanho(1,2); // 2
 confereTamanho(3,4,5); // 3

 //object destructuring
const user = {
    id: 42,
    displayName: 'JDoe',
    fullName: {
        firstName: 'Jonh',
        lastName: 'Doe'
    }
}

function userId({id}){
    return id;
}
function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}
userId(user);// 42
getFullName(user)// Jonh Doe