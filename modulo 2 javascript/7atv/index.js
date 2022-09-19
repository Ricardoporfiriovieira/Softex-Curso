function fala(){
    console.log("Iniciando Programa!");
}

function soma(a,b){
    return a + b
}

function sub(a,b){
    return a - b
}

function div(a,b){
    return a / b
}

function mult(a,b){
    return a * b
}

var a = 5;
var b = 3;


fala();
var maior = (a, b) => {
    if(a > b){
        console.log(`O número: ${a} é o maior`) ;
    }else{
        if(b > a){
            return `O número ${b} é o maior`;
        }else{
            
            return "Os dois números são iguais"
        }
    }
}
console.log(`A soma entre ${a} e ${b} = ${soma(a,b)}`)
console.log(`A Subtração entre ${a} e ${b} = ${sub(a,b)}`)
console.log(`A multiplicação entre ${a} e ${b} = ${mult(a,b)}`)
console.log(`A soma divisão ${a} e ${b} = ${div(a,b)}`)
console.log(maior(5, 3));
