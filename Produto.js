class Produto {
    constructor(name, descricão, preço, ){
        this.name = name
        this.descricão = descricão
        this.preço = preço
        this.inStock = 0;
    }
    adicionarStock(quantidade){
        this.inStock += quantidade
    }
    calcularDesconto(descontoPorcentgem){
        const valorDesconto = (this.preço * descontoPorcentgem) / 100
        return this.preço - valorDesconto
    }
}

const produto1 = new Produto('Creatina','Creatina pura', 1000)
console.log(produto1)
produto1.adicionarStock(10)
console.log('Quantidade em estoque', produto1.inStock)

const descontoPreço = produto1.calcularDesconto(10)
console.log('Preço com desconto', descontoPreço)
