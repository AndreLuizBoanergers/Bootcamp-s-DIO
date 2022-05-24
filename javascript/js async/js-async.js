const myPromise = new Promise((resolve,reject)=>{
    window.setTimeout(()=>{
        resolve("Resolvida");
    },2000);
});

await myPromise
   .then((result)=> result + 'Passando pelo then')
    .then((result)=> result + ' e agora acabou!')
    .catch((error)=> console.log(error.message));

async function resolvePromise(){
    const myPromise = new Promise((resolve, reject)=>{
        window.setTimeout(()=>{
           resolve('Resolvida');
       } ,3000);
    });
    const resolved = await myPromise
        .then((result)=> result + 'Passando pelo then')
        .then((result)=> result + "e agora acabou");
    return resolved;
}
async function resolvePromise(){
    const myPromise = new Promise((resolve, reject)=>{
       window.setTimeout(()=>{
            resolve("Resolvida");
        },3000);
    });
    let result;
    try {
        result = await myPromise
        .then((result)=> result + 'Passando pelo then')
        .then((result)=> result + "acabou");
    } catch (error) {
       result = error.message; 
    }
    return result;
}