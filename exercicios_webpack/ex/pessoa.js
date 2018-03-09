export default class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    toString(){
        return `Pessoa: ${this.nome}`
    }
}

const pessoa = new Pessoa('Luiz Felipe Wendt')
console.log(pessoa.toString());

