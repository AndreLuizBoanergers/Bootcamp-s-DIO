const alunos = [
    {
        nome: 'Joao',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '1B',
    },
    {
        nome: 'Miquel',
        nota: 3,
        turma: '1B',
    },
]

function AlunosAprovados(array,media){
    let aprovado = [];
    for (let i = 0; i < array.length; i++) {
        const {nota,nome} = array[i]
        if(nota >= media){
            aprovado.push(nome);
        }  
    }
    return aprovado;
}
console.log(AlunosAprovados(alunos,5))

function calculaIdade(anos){
    return`Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} anos de idade`;
}
const pessoa1 = {
    nome: "maria",
    idade: 30,
}
const pessoa2 = {
    nome: "carla",
    idade: 26,
}
const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug'
}
console.log(calculaIdade.call(pessoa2,30));
console.log(calculaIdade.apply(animal,[5]));