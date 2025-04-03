/* Aula 4 - Força ou Queda */

/* Código da aula 

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

*/

/* Código com interface html e css */

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

const hero1Input = document.getElementById("jogador1");
const hero2Input = document.getElementById("jogador2");
const hero3Input = document.getElementById("jogador3");

const hero1NameLi =  document.getElementById("jogador1name");
const hero2NameLi =  document.getElementById("jogador2name");
const hero3NameLi =  document.getElementById("jogador3name");
const heroesStrengthLi = document.getElementById("forcaJogador");

const villain1NameLi =  document.getElementById("computador1name");
const villain2NameLi =  document.getElementById("computador2name");
const villain3NameLi =  document.getElementById("computador3name");
const villainsStrengthLi = document.getElementById("forcaComputador");

const resultP = document.getElementById("resultadoFinal");

function sort(position) {
    let randomIndex = Math.floor(Math.random() * 10);
    let sortedHero = POSSIBLE_HEROES_LIST[randomIndex];
    while(heroes.includes(sortedHero)) {
        randomIndex = Math.floor(Math.random() * 10);
        sortedHero = POSSIBLE_HEROES_LIST[randomIndex];
    }
    heroes[position] = sortedHero;
    hero1Input.value = heroes[0]
    hero2Input.value = heroes[1]
    hero3Input.value = heroes[2]
}

function result() {
    if (heroes.filter(hero => hero.trim().length > 0).length !== 3) {
        alert("Selecione os três todos os heróis");
        return;
    }

    for(let i = 0; i < villains.length; i++){
        let randomIndex = Math.floor(Math.random() * 10);
        let sortedVillain = POSSIBLE_VILLAINS_LIST[randomIndex];
        while(villains.includes(sortedVillain)) {
            randomIndex = Math.floor(Math.random() * 10);
            sortedVillain = POSSIBLE_VILLAINS_LIST[randomIndex];
        }
        villains[i] = sortedVillain;
        villainsStrength += Math.floor(Math.random() * 100) + 1;
        heroesStrength += Math.floor(Math.random() * 100) + 1;
    }

    hero1NameLi.innerHTML = `Nome herói 1: ${heroes[0]}`;
    hero2NameLi.innerHTML = `Nome herói 2: ${heroes[1]}`;
    hero3NameLi.innerHTML = `Nome herói 3: ${heroes[2]}`;
    heroesStrengthLi.innerHTML = `Força time de heróis: ${heroesStrength}`;

    villain1NameLi.innerHTML = `Nome vilão 1: ${villains[0]}`;
    villain2NameLi.innerHTML = `Nome vilão 2: ${villains[1]}`;
    villain3NameLi.innerHTML = `Nome vilão 3: ${villains[2]}`;
    villainsStrengthLi.innerHTML = `Força time de vilões: ${villainsStrength}`;

    resultP.innerHTML = heroesStrength > villainsStrength 
        ? 'Seu time é muito forte! Venceu!'
        : heroesStrength === villainsStrength
        ? 'Os dois times tem a mesma força! Empatou!'
        : 'Seu time é fraquinho! Perdeu!';

    hero1Input.value = "";
    hero2Input.value = "";
    hero3Input.value = "";
    heroes = ["", "", ""];
    heroesStrength = 0;
    villains = ["", "", ""];
    villainsStrength = 0;
}
