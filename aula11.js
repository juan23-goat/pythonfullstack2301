//OPÃO 2: Jogo de RPG Simples:

//Crie uma classe Personagem com vida, ataque, defesa e nome.
//Desenvolva subclasses Guerreiro, Mago e Arqueiro com habilidades especiais.
//Implemente um sistema de batalha onde dois personagens podem lutar.
class Personagens{
    constructor(vida,ataque,defesa,ataqueespecial){
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
        this. ataqueespecial = ataqueespecial}
}
class Guerreiro(personagens): {
ataque : espada(60),
defesa : escudo(20) ,
vida : 100
}
personagens.mago = {
ataque : varinha(40),
defesa : escudodemagia(50),
vida : 50,
ataqueespecial: magia
}
personagens.arqueiro = {
ataque : Arco(30) ,
defesa : escudo(20),
vida :70,
ataqueespecial: flechadefogo
}
let player1 ={PersonagemGuerreiro}


function subclasses (ataque , defesa,vida)
  if (personagens().ataque > defesa);
console.log("defesa quebrada, vida exposta")
   if (personagens().ataque < vida);
console.log("sua vida foi abalada :"(vida-ataque))
