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
