class personagemCarateristicas{
    constructor (type, name, age){
        this.type = type
        this.name = name
        this.age = age        
    }
    escrever(){
    let ataqueUsado

        if (this.type === "mago") {
        ataqueUsado = "magia";
        } else if (this.type === "guerreiro") {
        ataqueUsado = "espada";
        } else if (this.type === "monge") {
        ataqueUsado = "artes marciais";
        } else if (this.type === "ninja") {
        ataqueUsado = "shuriken";
        }
    
    console.log(`O ${this.type} atacou usando ${ataqueUsado}`);
    }
}

let personagem = new personagemCarateristicas("guerreiro")
personagem.escrever()