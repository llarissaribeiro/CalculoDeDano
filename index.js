const nomeAtaque = prompt("Digite o nome do personagem que vai atacar:")
const danoAtaque = prompt("Quanto de poder de ataque ele tem?")

const nomeDefesa = prompt("Digite o nome do personagem que vai defender:")
let pontosDeVida = prompt("Quantos pontos de vida ele possui?")
const poderDefesa = prompt("Quanto de poder de defesa ela tem?")
const possuiEscudo = prompt("Ele possui escudo? Sim/Não")

let danoCausado = 0

if(danoAtaque > poderDefesa && possuiEscudo === "Não"){
  danoCausado = danoAtaque - poderDefesa
} else if(danoAtaque > poderDefesa && possuiEscudo === "Sim"){
  danoCausado = (danoAtaque - poderDefesa)/2
}

pontosDeVida -= danoCausado

alert(
  nomeAtaque + " causou " + danoCausado + " pontos de dano em " + nomeDefesa
)

alert(
  "Resultado do ataque: " + "\n\n" +
  nomeAtaque + ":" + 
  "\nPoder de Ataque: " + danoAtaque + "\n\n" +
  nomeDefesa + ":" + 
  "\nPoder de Defesa: " + poderDefesa + 
  "\nPossui escudo? " + possuiEscudo +
  "\nPontos de Vida: " + pontosDeVida
)