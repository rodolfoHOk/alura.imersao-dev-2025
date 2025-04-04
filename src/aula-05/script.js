/* Aula 4 - Força ou Queda */

/* Código da aula */

// PARTE 1: Lista de perguntas e respostas

const perguntas = [
    {
        pergunta: "Qual é o principal pokémon do Ash?",
        respostas: [
            { opcao: "Charmander", correto: false },
            { opcao: "Bulbasaur", correto: false },
            { opcao: "Pikachu", correto: true },
            { opcao: "Squirtle", correto: false }
        ]
    },
    {
        pergunta: "Qual é o tipo do pokémon Charizard?",
        respostas: [
            { opcao: "Água", correto: false },
            { opcao: "Fogo", correto: true },
            { opcao: "Grama", correto: false },
            { opcao: "Elétrico", correto: false }
        ]
    },
    {
        pergunta: "Qual é o nome do professor que ensina o Ash?",
        respostas: [
            { opcao: "Professor Oak", correto: false },
            { opcao: "Professor Elm", correto: false },
            { opcao: "Professor Sycamore", correto: false },
            { opcao: "Professor Carvalho", correto: true }
        ]
    },
    {
        pergunta: "Qual é o pokémon que evolui para Gyarados?",
        respostas: [
            { opcao: "Magikarp", correto: true },
            { opcao: "Goldeen", correto: false },
            { opcao: "Poliwag", correto: false },
            { opcao: "Psyduck", correto: false }
        ]
    },
    {
        pergunta: "Qual é o tipo do pokémon Mewtwo?",
        respostas: [
            { opcao: "Fantasma", correto: false },
            { opcao: "Psíquico", correto: true },
            { opcao: "Lutador", correto: false },
            { opcao: "Fada", correto: false }
        ]
    },
    {
        pergunta: "Qual é o nome do rival do Ash?",
        respostas: [
            { opcao: "Brock", correto: false },
            { opcao: "Misty", correto: false },
            { opcao: "Tracey", correto: false },
            { opcao: "Gary", correto: true }
        ]
    },
    {
        pergunta: "Qual é o pokémon que pode aprender Surf?",
        respostas: [
            { opcao: "Bulbasaur", correto: false },
            { opcao: "Charizard", correto: false },
            { opcao: "Pikachu", correto: true },
            { opcao: "Squirtle", correto: false }
        ]
    },
    {
        pergunta: "Qual é o tipo do pokémon Gardevoir?",
        respostas: [
            { opcao: "Fantasma", correto: false },
            { opcao: "Fada", correto: true },
            { opcao: "Lutador", correto: false },
            { opcao: "Psíquico", correto: false }
        ]
    },
    {
        pergunta: "Qual é o pokémon que evolui para Raichu?",
        respostas: [
            { opcao: "Sandshrew", correto: false },
            { opcao: "Machop", correto: false },
            { opcao: "Poliwag", correto: false },
            { opcao: "Pikachu", correto: true }
        ]
    },
    {
        pergunta: "Qual é o tipo do pokémon Gyarados?",
        respostas: [
            { opcao: "Fogo", correto: false },
            { opcao: "Água", correto: true },
            { opcao: "Grama", correto: false },
            { opcao: "Elétrico", correto: false }
        ]
    }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
