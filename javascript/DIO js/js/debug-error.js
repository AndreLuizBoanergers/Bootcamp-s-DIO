function validaArray(arraym,num){

    try {
        if(!Array && !num ) throw new ReferenceError("Envie os parametros");
        if(typeof array !== 'object') throw new TypeError("O array precisa ser um objeto");
        if(typeof num !== 'number') throw new TypeError("O array nao eum numero");
        if(array.lenght !== num) throw new RangeError('Tamanho invalido');
        return array;
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("reference Error");
            console.log(error.message);
        }else if(error instanceof TypeError){
            console.log("TypeError");
            console.log(error.message);
        }else if(error instanceof RangeError){
            console.log("RangeError");
            console.log(error.message);           
        }else{
            console.log(`Erro desconhecido: ${error}`)
        }
    }
}

console.log(validaArray([],2))