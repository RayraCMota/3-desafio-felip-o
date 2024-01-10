let username = getfirstname ("Paula Barone Onofre"); 


console.log("***3 Desafio Felipão***");
console.log("***Bem vindo ao jogo***")
console.log("***Ola, " + username, "***");

let age = 15

console.log("descrição do jogador:")
console.log("nome:", username)
console.log("idade:", age)

console.log("Escolha o seu personagem:")

function getfirstname(name){
	let firstname=name.split(" ")[0]
    return firstname
    }

class avatar{
    constructor  (personagem, arma){
        this.personagem = personagem
        this.arma = arma
    }
    
    escrever(){
        console.log (`O personagem escolhido foi o ${this.personagem}`)
        console.log (`O ${this.personagem} atacou usando ${this.arma}`)
        
        }
}

let Mago= new avatar ("Mago", "Magia");
let Guerreiro= new avatar("Guerreiro","Espada");
let Monge= new avatar("Monge","Artes Marciais");
let Ninja= new avatar("Ninja","shuriken");
Monge.escrever()
