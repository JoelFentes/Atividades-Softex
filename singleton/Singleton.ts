

export class SistemaSeguranca {
    private static instance: SistemaSeguranca;
    private constructor() {}

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instance) {  
            SistemaSeguranca.instance = new SistemaSeguranca();
        }

        return SistemaSeguranca.instance;
    }

    public static acessarBaseSecreta() {
        let s1: string = "1234"
        let s2: string = "1234"


        if (s1 === s2) {
            console.log("Acesso Autorizado, Seja Bem-Vindo!");
        }
        else {
            console.log("Acesso Negado, Alerta Acionado!");
        }
    }
}


SistemaSeguranca.getInstance()
SistemaSeguranca.acessarBaseSecreta()