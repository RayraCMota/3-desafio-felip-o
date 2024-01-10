class formadebolo{
    constructor  (sabordamassa, saborrecheio){
        this.sabordamassa = sabordamassa
        this.saborrecheio = saborrecheio
    }
    escrever(){
        console.log (`Um delicioso bolo de ${this.sabordamassa} com recheio de ${this.saborrecheio}`)
    }
}
let bolofesta = new formadebolo ("chocolate","nutella")

bolofesta.escrever()

