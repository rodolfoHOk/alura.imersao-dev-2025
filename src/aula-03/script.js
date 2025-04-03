/* Aula 3 - Chão feito de vidro */

/* Código da aula mais desafios 

let round = 1;
let win = false;

while (round <= 3) {
    let playerChoice = prompt(`Nível ${round} - Escolha o vidro (1, 2 ou 3):`);
    while(playerChoice < 1 || playerChoice > 3 || isNaN(playerChoice)) {
        alert("Opção inválida! Por favor, escolha 1, 2 ou 3.");
        playerChoice = prompt(`Nível ${round} - Escolha o vidro (1, 2 ou 3):`);
    }
    playerChoice = Number(playerChoice);

    let brokenGlass = Math.floor(Math.random() * 3) + 1;

    if(playerChoice == brokenGlass) {
        alert(`O vidro ${playerChoice} quebrou. Acabou o jogo para voce.`);
        break;
    } else {
        alert(`Você sobreviveu! O vidro quebrado estava na ponte ${brokenGlass}.`);
        if (round === 3) {
            win = true;
            break;
        }
    }

    round++;
}

if (win) {
    alert("Parabéns! Você sobreviveu a todos os níveis.");
}

*/

/* Código com interface html e css */

let roundValue = 1;
const round = document.getElementById("round");
const choicesList = [1, 2, 3];
const choicesRadioGroup = document.getElementById("choices");
const choices = choicesRadioGroup.querySelectorAll("input[type='radio']");
let playerChoiceValue = null;
const playerChoice = document.getElementById("player-choice");
const brokenGlass = document.getElementById("broken-glass");
const result = document.getElementById("result");
let loose = false;
let win = false;

round.innerHTML = `Nível ${roundValue}`;

choices.forEach(choice => {
    choice.addEventListener("change", () => {
        playerChoiceValue = choice.value;
        playerChoice.innerHTML = choicesList[playerChoiceValue - 1];
        computerChoice.innerHTML = "";
    });
});

function openModal() {
    const mainContent = document.querySelector(".content");
    mainContent.classList.add("hidden");
    const modal = document.querySelector(".modal");
    modal.classList.add("open");
}

function closeModal() {
    const mainContent = document.querySelector(".content");
    mainContent.classList.remove("hidden");
    const modal = document.querySelector(".modal");
    modal.classList.remove("open");
    clearChoices();
}

function clearChoices() {
    roundValue = 1;
    round.innerHTML = `Nível ${roundValue}`;
    result.innerHTML = "Resultado";
    playerChoice.innerHTML = "";
    brokenGlass.innerHTML = "";
    choices.forEach(choice => {
        choice.checked = false;
    });
    loose = false;
    win = false;
}

function playRound() {
    if (loose) {
        alert("Você já perdeu o jogo. Por favor, feche a janela para jogar novamente.");
        return;
    }

    if (win) {
        alert("Você já ganhou o jogo. Por favor, feche a janela para jogar novamente.");
        return;
    }

    if (playerChoiceValue === null) {
        alert("Escolha um vidro antes de continuar.");
        return;
    }

    const brokenGlassValue = Math.floor(Math.random() * 3) + 1;

    if (playerChoiceValue == brokenGlassValue) {
        brokenGlass.innerHTML = brokenGlassValue;
        result.innerHTML = `O vidro quebrou! Acabou o jogo para você.`;
        loose = true;
    } else {
        brokenGlass.innerHTML = brokenGlassValue;
        result.innerHTML = `Você sobreviveu!`;
        roundValue++;
        if (roundValue > 3) {
            result.innerHTML = "Parabéns! Você sobreviveu a todos os níveis.";
            win = true;
            choices.forEach(choice => {
                choice.checked = false;
            });
            return;
        }
        round.innerHTML = `Nível ${roundValue}`;
    }

    choices.forEach(choice => {
        choice.checked = false;
    });
}
