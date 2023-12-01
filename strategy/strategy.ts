interface Strategy {
    execute(num1: number, num2: number): number;
  }
  

class Adicao implements Strategy {
    execute(num1: number, num2: number): number {
      return num1 + num2;
    }
  }
  
class Subtracao implements Strategy {
    execute(num1: number, num2: number): number {
      return num1 - num2;
    }
  }
  
class Multiplicacao implements Strategy {
    execute(num1: number, num2: number): number {
      return num1 * num2;
    }
  }
  
class Divisao implements Strategy {
    execute(num1: number, num2: number): number {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error("Não é possível dividir por zero.");
      }
    }
  }
  
function aplicacao(numero1: number, numero2: number, operacao: Strategy): void {
    const resultado = operacao.execute(numero1, numero2);
    console.log(`Resultado da operação: ${resultado}`);
  }
  
  const numero1 = 10
  const numero2 = 2

  
let estrategia: Strategy;
  
estrategia = new Adicao();
aplicacao(numero1, numero2, estrategia);
estrategia = new Divisao();
aplicacao(numero1, numero2, estrategia);
estrategia = new Subtracao();
aplicacao(numero1, numero2, estrategia);
estrategia = new Multiplicacao();  
aplicacao(numero1, numero2, estrategia);
  