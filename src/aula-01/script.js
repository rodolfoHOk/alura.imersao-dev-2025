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
