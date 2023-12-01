interface Galinha {
    cacarejar(): void;
    voar(): void;
  }
  

class Pato {
    grasnar(): void {
      console.log('Quack! Quack!');
    }
  
    voar(): void {
      console.log('Voando como um pato.');
    }
  }
  

  class AdaptadorPato implements Galinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    cacarejar(): void {
        console.log('Po! Po!');
    }
  
    voar(): void {
        console.log('Voando como uma galinha.');
    }
  }
  

class AdaptadorPatoDemo {
    static executar(): void {
      const pato = new Pato();
      const adaptadorPato = new AdaptadorPato(pato);
  
      console.log('Pato:');
      pato.grasnar();
      pato.voar();
  
      console.log('\nAdaptadorGalinha:');
      adaptadorPato.cacarejar();
      adaptadorPato.voar();
    }
  }
  
  // Executando o exemplo
  AdaptadorPatoDemo.executar();
  