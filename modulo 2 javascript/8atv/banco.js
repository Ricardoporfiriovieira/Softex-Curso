<<<<<<< HEAD
class banco {
    constructor(conta, saldo, tipodeconta, agencia, numerodaconta){
        this.contax = conta
        this.saldo = saldo
        this.tipodeconta = tipodeconta
        this.agencia = agencia
        this.numerodaconta = numerodaconta
    }

    buscarsaldo(){
       return this.saldo
    }

    deposito(valordepositar){
        this.saldo += valordepositar;
    }

    saque(valorsaca){
        if(valorsaca <= this.saldo){
            return this.saldo -= valorsaca;
        }else{
            console.log(`Saldo insuficiente! saldo atual: ${this.saldo} Tentativa de saque: ${valorsaca}`)
        }
    }

    numerodaconta(){
        return this.numerodaconta
    }
}

let banco1 = new banco(000, 20, "corrente", 1214, 6876);


console.log(banco1.numerodaconta)
console.log(banco1.buscarsaldo())
banco1.deposito(10)
console.log(banco1.buscarsaldo())
banco1.saque(31)
banco1.saque(30)
console.log(banco1.buscarsaldo())

=======
class banco {
    constructor(conta, saldo, tipodeconta, agencia, numerodaconta){
        this.contax = conta
        this.saldo = saldo
        this.tipodeconta = tipodeconta
        this.agencia = agencia
        this.numerodaconta = numerodaconta
    }

    buscarsaldo(){
       return this.saldo
    }

    deposito(valordepositar){
        this.saldo += valordepositar;
    }

    saque(valorsaca){
        if(valorsaca <= this.saldo){
            return this.saldo -= valorsaca;
        }else{
            console.log(`Saldo insuficiente! saldo atual: ${this.saldo} Tentativa de saque: ${valorsaca}`)
        }
    }

    numerodaconta(){
        return this.numerodaconta
    }
}

let banco1 = new banco(000, 20, "corrente", 1214, 6876);


console.log(banco1.numerodaconta)
console.log(banco1.buscarsaldo())
banco1.deposito(10)
console.log(banco1.buscarsaldo())
banco1.saque(31)
banco1.saque(30)
console.log(banco1.buscarsaldo())

>>>>>>> 73e153e82965b6c19cc94840714a091caf05200d
