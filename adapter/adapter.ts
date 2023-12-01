class SistemaAntigo {
    obterTemperaturaFahrenheit(): number {
      return 32; 
    }
  }
  
  interface NovoSistema {
    obterTemperaturaCelsius(): number;
  }
  
class Adapter implements NovoSistema {
    private sistemaAntigo: SistemaAntigo;
  
    constructor(sistemaAntigo: SistemaAntigo) {
      this.sistemaAntigo = sistemaAntigo;
    }
  
    obterTemperaturaCelsius(): number {
      return (this.sistemaAntigo.obterTemperaturaFahrenheit() - 32) * (5 / 9);
    }
  }
  
  function clienteCodigo(sistema: NovoSistema) {
    console.log(`Temperatura em Celsius: ${sistema.obterTemperaturaCelsius().toFixed(2)}°C`);
  }
  
  const sistemaAntigo = new SistemaAntigo();
  const sistemaAdaptado = new Adapter(sistemaAntigo);
  
  clienteCodigo(sistemaAdaptado);
  