class cao{
    constructor(raca, altura, pedigre){
        this.raca = raca;
        this.altura = altura;
        this.pedigre = pedigre;
    }
}

function mostrapropriedade(obj){
    for(i in obj){
        console.log(i);
    }
}

function mostralista(lista){
    for(i of lista){
        console.log(i);
    }
}

let pitubull = new cao("pitbull", 103, true);
let poodle =  new cao("poodle", 50, true);
let viralata = new cao("caramelo", 60, false);

let i;

let listaobj = [pitubull, poodle, viralata];

console.log("\nMOSTRANDO O CONTEUDO DA LISTA: ");
mostralista(listaobj);
console.log("\nMOSTRANDO PROPRIEDADES DO OBJETO: ");
mostrapropriedade(pitubull);

