class Veiculo {
    constructor(marca, modelo, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }

    acelerar() {
        console.log(`O ${this.marca} ${this.modelo} está acelerando... Vrumm!`);
    }

    obterDetalhes() {
        return `Veículo: ${this.marca} ${this.modelo} (${this.cor})`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, cor, numeroDePortas) {
        super(marca, modelo, cor);
        this.numeroDePortas = numeroDePortas;
    }


    ligarArCondicionado() {
        console.log(`Ar condicionado do ${this.modelo} ligado.`);
    }
}


class Moto extends Veiculo {
    constructor(marca, modelo, cor, cilindradas) {
        super(marca, modelo, cor);
        this.cilindradas = cilindradas;
    }


    empinar() {
        console.log(`A moto ${this.modelo} de ${this.cilindradas}cc está empinando!`);
    }
}


const meuCarro = new Carro("Toyota", "Corolla", "Preto", 4);

const minhaMoto = new Moto("Honda", "CB 500", "Vermelha", 500);

const carroAntigo = new Carro("Volkswagen", "Fusca", "Azul", 2);

console.log("--- Detalhes ---");
console.log(meuCarro.obterDetalhes()); 
console.log(minhaMoto.obterDetalhes());

console.log("\n--- Ações Específicas ---");
meuCarro.ligarArCondicionado(); 
minhaMoto.empinar();            
carroAntigo.acelerar();         