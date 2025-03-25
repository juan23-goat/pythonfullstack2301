//OPÃO 2: Jogo de RPG Simples:

//Crie uma classe Personagem com vida, ataque, defesa e nome.
//Desenvolva subclasses Guerreiro, Mago e Arqueiro com habilidades especiais.
//Implemente um sistema de batalha onde dois personagens podem lutar.


class Personagem {
    constructor(nome, vida, ataque, defesa, ataqueEspecial) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ataqueEspecial = ataqueEspecial;
    }

    atacar(alvo) {
     let dano = this.ataque - alvo.defesa;
     if (dano > 0) {
      alvo.vida -= dano;
    console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
        } else {  
      console.log(`${this.nome} atacou ${alvo.nome}, mas a defesa foi suficiente para resistir ao ataque!`);
    
}
}
}

// Classe Guerreiro
class Guerreiro extends Personagem {
    constructor(nome) {
        super(nome, 100, 60, 20, "Golpe de Espada");
    }
}

// Classe Mago
class Mago extends Personagem {
    constructor(nome) {
        super(nome, 50, 40, 50, "Magia Arcana");
    }
}

// Classe Arqueiro
class Arqueiro extends Personagem {
    constructor(nome) {
        super(nome, 70, 30, 20, "Flecha de Fogo");
    }
}


// Simulação de batalha
console.log(" Batalha ");
guerreiro.atacar(mago);
mago.atacar(guerreiro);

console.log(`Vida do ${mago.nome}: ${mago.vida}`);
console.log(`Vida do ${guerreiro.nome}: ${guerreiro.vida}`);