class FrangoAssado {
    precoFrango:number
    constructor(precoFrango:number){
        this.precoFrango = precoFrango
        precoFrango = 4.50
    }
    
}

class Pepperoni extends FrangoAssado {
    precoPep:number
    constructor(precoFrango:number, precoPep:number){
        super(precoFrango)
        this.precoPep = precoPep
        precoPep = 0.99
    }
}

class QueijoMussarelaRalado extends Pepperoni {
    precoQ:number
    constructor(precoFrango:number, precoPep:number, precoQ:number){
        super(precoFrango, precoPep)
        this.precoQ = precoQ
        precoQ = 2.00
    }
}

class Sanduiche extends QueijoMussarelaRalado {
    precoSanduba:number
    constructor(precoSanduba:number,  precoFrango:number,  precoPep:number,  precoQ:number) {
        super(precoFrango, precoPep, precoQ)
        precoSanduba = precoFrango + precoPep + precoQ
    }

    public static valorTotal(){
        console.log(`Sanduíche de Frango, Pepperoni e Queijo Mussarela Ralado custa`); 
    }
}

Sanduiche.valorTotal()

//Travei na parte de dar o log no preço do sanduiche
