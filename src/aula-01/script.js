/* aula 01 - Conversor de Moedas */

/* Código da aula mais desafios 

const wonsReais = 0.003880;
const dollarReais = 5.74;
const euroReais = 6.19;

const coin = prompt("Qual moeda você deseja converter? (1 - dólar, 2 - euro ou 3 - won)");

if (coin == 1) {
    const dollarQuantity = prompt("Digite a quantidade de dólares que deseja converter");
    const reais = dollarReais * dollarQuantity;
    const formattedReais = currencyFormatter(reais);
    alert(`A quantidade de dólares ${dollarQuantity} convertida para reais é: ${formattedReais}`);
} else if (coin == 2) {
    const euroQuantity = prompt("Digite a quantidade de euros que deseja converter");
    const reais = euroReais * euroQuantity;
    const formattedReais = currencyFormatter(reais);
    alert(`A quantidade de euros ${euroQuantity} convertida para reais é: ${formattedReais}`);
} else if (coin == 3) {
    const wonQuantity = prompt("Digite a quantidade de wons que deseja converter");
    const reais = wonsReais * wonQuantity;
    const formattedReais = currencyFormatter(reais);
    alert(`A quantidade de wons ${wonQuantity} convertida para reais é: ${formattedReais}`);
} else {
    alert("Opção inválida. Tente novamente.");
}

function currencyFormatter(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

*/

/* Código com interface html e css */

const wonsReais = 0.003880;
const dollarReais = 5.74;
const euroReais = 6.19;

const selectCoin = document.querySelector("#coin");
const inputValue = document.querySelector("#currencyValue");
const resultText = document.querySelector("#result");

selectCoin.addEventListener("change", () => {
    const coin = selectCoin.value;

    if (coin == "dollar") {
        inputValue.value = "";
        inputValue.placeholder = "Quantidade em dólares";
        resultText.innerHTML = "";
    } else if (coin == "euro") {
        inputValue.value = "";
        inputValue.placeholder = "Quantidade em euros";
        resultText.innerHTML = "";
    } else if (coin == "won") {
        inputValue.value = "";
        inputValue.placeholder = "Quantidade em wons";
        resultText.innerHTML = "";
    }
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
    selectCoin.value = "";
    inputValue.value = "";
    inputValue.placeholder = "Valor em espécie";
    resultText.innerHTML = "";
}

function convert() {
    const coin = selectCoin.value;
    const currencyValue = parseFloat(inputValue.value);
    let reais;

    if (coin == "dollar") {
        reais = dollarReais * currencyValue;
    } else if (coin == "euro") {
        reais = euroReais * currencyValue;
    } else if (coin == "won") {
        reais = wonsReais * currencyValue;
    }

    resultText.innerHTML = currencyFormatter(reais);
}

function currencyFormatter(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
