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
