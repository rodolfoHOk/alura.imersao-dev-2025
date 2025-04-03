/* Aula 4 - Força ou Queda */

/* Código da aula */

const POSSIBLE_HEROES_LIST = [
    "Homem-Aranha",
    "Homem de Ferro",
    "Capitão América",
    "Thor",
    "Hulk",
    "Doutor Estranho",
    "Pantera Negra",
    "Wolverine",
    "Demolidor",
    "Feiticeira Escarlate"
];

const POSSIBLE_VILLAINS_LIST = [
    "Thanos",
    "Loki",
    "Doutor Destino",
    "Magneto",
    "Duende Verde",
    "Ultron",
    "Caveira Vermelha",
    "Rei do Crime",
    "Venom",
    "Galactus"
];

let heroes = ["", "", ""];
let villains = ["", "", ""];
let heroesStrength = 0;
let villainsStrength = 0;
let sortedIndex = [];

for(let i = 0; i < heroes.length; i++){
    heroes[i] = prompt("Digite o nome do herói " + (i + 1));
    heroesStrength += Math.floor(Math.random() * 100) + 1;
}

for(let i = 0; i < villains.length; i++){
    let randomIndex = Math.floor(Math.random() * 10);
    while(sortedIndex.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * 10);
    }
    sortedIndex.push(randomIndex);
    villains[i] = POSSIBLE_VILLAINS_LIST[randomIndex];
    villainsStrength += Math.floor(Math.random() * 100) + 1;
}

if (heroesStrength > villainsStrength) {
    alert(`Seu time é muito forte! Você ganhou a disputa de cabo de guerra! A força dos heróis foi de ${heroesStrength} e a dos vilões foi de ${villainsStrength}`);
} else if (heroesStrength < villainsStrength) {
    alert(`Seu time é fraquinho! Os vilões venceram a disputa de cabo de guerra! A força dos vilões foi de ${villainsStrength} e a dos heróis foi de ${heroesStrength}`);
} else {
    alert(`Os dois times tem a mesma força! Vocês empataram! Suas forças foram de ${heroesStrength}`);
}
