/* Aula 02 - JoKenPo */

/* Código da aula mais desafios 

let idade = prompt("Quantos anos você tem?");
while (isNaN(idade) || idade === "") {
    alert("Por favor, digite um número válido para a sua idade.");
    idade = prompt("Quantos anos você tem?");
}

if (idade < 18) {
    alert("Você não pode jogar jokenpo, pois é menor de idade.");
} else {
    let playerChoice = prompt("Digite 1 = pedra, 2 = papel ou 3 = tesoura");
    while (playerChoice < 1 || playerChoice > 3 || isNaN(playerChoice) && (playerChoice != "pedra" && playerChoice != "papel" && playerChoice != "tesoura")) {
        alert("Opção inválida! Por favor, escolha 1 = pedra, 2 = papel ou 3 = tesoura");
        playerChoice = prompt("Digite 1 = pedra, 2 = papel ou 3 = tesoura");
    }
    if (playerChoice == "pedra") {
        playerChoice = 1;
    }
    if (playerChoice == "papel") {
        playerChoice = 2;
    }
    if (playerChoice == "tesoura") {
        playerChoice = 3;
    }
    
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    
    if (playerChoice == computerChoice) {
        alert(`Empate!!\nVocê escolheu ${getChoiceName(playerChoice)} e o computador também escolheu ${getChoiceName(computerChoice)}.`);
    } else if (
        (playerChoice == 1 && computerChoice == 3) ||
        (playerChoice == 2 && computerChoice == 1) ||
        (playerChoice == 3 && computerChoice == 2)
    ) {
        alert(`Você ganhou!!\n\nVocê escolheu ${getChoiceName(playerChoice)} e o computador escolheu ${getChoiceName(computerChoice)}.`);
    } else {
        alert(`Você perdeu!!\n\nVocê escolheu ${getChoiceName(playerChoice)} e o computador escolheu ${getChoiceName(computerChoice)}.`);
    }
}

function getChoiceName(choice) {
    choice = Number(choice);
    if (choice === 1) {
        return "pedra";
    }
    if (choice === 2) {
        return "papel";
    }
    if (choice === 3) {
        return "tesoura";
    }
    return "opção inválida";
}

*/

/* Código com interface html e css */

const choicesList = ['🤜🏼', '🖐🏼', '✌🏼'];
const choicesRadioGroup = document.getElementById("choices");
const choices = choicesRadioGroup.querySelectorAll("input[type='radio']");
let playerChoiceValue = null;
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");

choices.forEach(choice => {
    choice.addEventListener("change", () => {
        playerChoiceValue = choice.value;
        playerChoice.innerHTML = choicesList[playerChoiceValue];
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
    playerChoice.innerHTML = "";
    computerChoice.innerHTML = "";
    choices.forEach(choice => {
        choice.checked = false;
    });
}

function playGame() {
    if (playerChoiceValue === null) {
        alert("Por favor, escolha uma opção!");
        return;
    }

    const computerChoiceValue = Math.floor(Math.random() * 3);
    computerChoice.innerHTML = choicesList[computerChoiceValue];

    let resultValue = ""
    if (playerChoiceValue == computerChoiceValue) {
        resultValue = "Empate!";
    } else if (
        (playerChoiceValue == 0 && computerChoiceValue == 2) ||
        (playerChoiceValue == 1 && computerChoiceValue == 0) ||
        (playerChoiceValue == 2 && computerChoiceValue == 1)
    ) {
        resultValue = "Você ganhou!";
    } else {
        resultValue = "Você perdeu!";
    }

    const result = document.getElementById("result");
    result.innerHTML = resultValue;

    choices.forEach(choice => {
        choice.checked = false;
    });
}
