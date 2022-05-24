const array = [1,2,3,4,5];

//map

array.map((item)=> item * 2);

// foreach

array.forEach((item)=> item * 2);

// filter

 const frutas = ['maça fuji', 'maça verde','laranja'];

 frutas.filter((fruta)=> fruta.includes('maça'));

 // redunce

 //const callbackFn = function(acumulator, currentValue, index, array);
 //array.reduce(callbackFn,initialvalue);

 // map
 const maca = {
     value: 2,
 }
 const laranja = {
     value: 3,
 }
   function mapComThis(arr,thisarg){
       return arr.map(function(item){
           return item * this.value;
       },thisarg)
   }
   const nums = [1,2]
   /// com this maca
   console.log(mapComThis(nums,maca))
   // com this laranja
   console.log(mapComThis(nums,laranja))

   function mapSemthis(arr){
       return arr.map(function(item){
           return item *2
       });
   }
   console.log(mapSemthis(nums))
   
function filtraPares2(arr){
    return arr.filter((item)=>{
        return item % 2 === 0;
    })
}

   function filtraPares(arr){
       return arr.filter(callBack)
   }
   function callBack(item){
       return item % 2 === 0;
   }
   const meuArray = [1,22,34,55,66,77,88];
   console.log(filtraPares(meuArray))
   console.log(filtraPares2(meuArray))

   function somaNumeros(arr){
       return arr.reduce(function(prev, current){
           return prev + current;
       })
   }
   const arr = [1,2,3,4,5,6,7,8,9];
console.log(somaNumeros(arr))

const lista = [
    {
        name: "Sabao em po",
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'Toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev,current){
        return prev - current.preco;
    },saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel,lista))