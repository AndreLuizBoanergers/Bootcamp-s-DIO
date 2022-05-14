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
//if/else
function numeroPositivo(num){
    const negativo = num < 0;
    const maiorqueDez  = num > 10;
    if(negativo){
        return "Este numero e negativo";
    }else if(!negativo && maiorqueDez){
        return "Este numero e positivo e maior que 10";
    }
    return "Este numero e positivo"
}
//swith/case
function getCor(id){
    switch(id){
        case 1:
            return "Azul";
        case 2:
            return "Vermelho";
        case 3:
            return "Verde";
        default:
            return "Cor nao esta no RGB";
    }
}
//for
function multiplicaPorDois(array){
    let multiplicados = [];
    for (let i = 0; i < array.length; i++) {
        multiplicados.push(array[i]) * 2;
    }
    return multiplicados;
}
const numeros = [12,33,44,55,66,77,88,99];
multiplicaPorDois(numeros);
//for in
function forIex1(obj){
    for(propiedade in obj){
        console.log(propiedade);
    }
}
function forIex2(obj){
    for (const propiedade in obj) {
       console.log(obj[propiedade]);
    }
}
const objeto = {
    id: "1",
    nome: "pedro",
    cidade: "Salvador"
}

forIex1(objeto);
// id
// nome
// cidade
forIex2(objeto)
// 1
// pedro
// cidade
function logLetras(palavra){
    for(letra of palavra){
        console.log(letra)
    }
}
const palavra = "abacaxi";
logLetras(palavra)
function logNumeros(nums){
    for(num of nums){
        console.log(num);
    }
}
///while do while

function exwhile(){
    let x = 0;
    while(x<10){
        console.log(x)
        x++;
    }
}
exwhile()

function exDoWhile(){
    let num = 0;
    do{
        console.log(num);
        num++;
    }while(num <= 10)
}
exDoWhile()

// this

const Pessoa = {
    firstName: 'Andre',
    lastName: 'Soares',
    id: 1,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    Getid: function(){
        return this.id;
    }
}
// metodo call()
Pessoa.fullName();
Pessoa.GetId()


const pessoa = {
    nome: "Juan",
};
const animal = {
    nome: "Bob",
}

function getSomething(){
    console.log(this.nome);
}
getSomething.call(animal);
//applay
//getSomething.apply(pessoa)
const myObj = {
    num1: 2,
    num2: 4,
}
function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj,1,5);//12
/// aplay
const Myobj = {
    num1: 2,
    num2: 4,
};
function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.apply(Myobj,[1,5]);//12
//bind 
const retornaNome = function(){
    return this.nome;
}
let bruno = retornaNome.bind({nome: "Bruno"});
bruno();//Bruno
//arows
const soma = (a,b)=> a + b;
soma(2,2);//4
