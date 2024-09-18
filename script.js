const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você acredita que a reciclagem pode trazer benefícios ecônomicos para a sociedade?",
        alternativas: [
            {
                texto: "Sim, pode gerear empregos e economizar recursos.",
                afirmacao: [
                    "A reciclagem pode gerar empregos e economizar recursos, contribuindo para o crescimento econômico e a preservação ambiental ao reduzir a necessidade de matérias-primas. ",
                    "A reciclagem pode impulsionar a economia ao gerar novas vagas de trablho e reduzir os gastos com a produççao de novos materiais, além de diminuir a pressão sobre os recursos naturais."
                ]
            },
            {
                texto: "Não, acho que os custos superam os benefícios. ",
                afirmacao: [
                    "A reciclagem pode não gerar tantos empregos quanto esperado e, em alguns casos, pode não ser eficiente na economia de recursos.",
                    "Embora existam custos iniciais, a reciclgem pode resultar em econômia a longo prazo ao reduzir a necessidade de extração de novos recurços e diminuir o impacto ambiental."

                ]
            }
        ]
    },
    {
        enunciado: "Você se preocupa com o impacto ambiental dos produtos que compra?",
        alternativas: [
            {
                texto: "Sempre procuro produtos sutentáveis e de baixo impacto",
                afirmacao: [
                    "Sempre procuro reduzir minha pegada ecológica e apoiar praticas sustentáveis.",
                    "Procurar produtos sustentáveis e de baixo impacto garantem que suas compras minimizem os danos ao meio meio ambiente e contribuam para práticas mais responsáveis e ecológicas."

                ]
            },
            {
                texto: "Não considero isso na hora de comprar",
                afirmacao: [
                    "a falta de conscientização sobre suas consequências ambientais.",
                    "Não considerar o impacto ambiental dos ptodutos na hora da compra pode ser um erro pois isso contribui para degradação ambiental e o esgotamento dos rescursos naturais. "
                ]
            
            }
        ]
    },
    {
        enunciado: "Qual a sua opinião sobre políticas públicas que incentivam a reciclagem?",
        alternativas: [
            {
                texto: "A favor, são essenciais para a sustentabilidade",
                afirmacao: [
                    "politicas públicas que desencorajam a reciclagem podem ser vistas como prejudiciais ao mesmo ambiente e á sustentabilidade global.",

                ]
            },
            {
                texto: "Contra, acredito que não são eficazes",
                afirmacao: [
                    "Sou contra, pois acredito que essas políticas públicas não são eficazes. Muitas vezes, a implementação é inadequada, faltando infraestrutura e educação adequada para a população.",

                ]
            }
        ]
    },
    {
        enunciado: "Como você descreveria sua atitude em relação ao uso de produtos descartáveis",
        alternativas: [
            {
                texto: "Evito ao máximo e uso alternativas reutilizáveis.",
                afirmacao: [
                    "Evito, ao máximo, o uso de produtos descartáveis e busco sempre utilizar alternativas reutilizáveis.",

                ]
            },
            {
                texto: "Uso sem preucupação com o impacto ambiental.",
                afirmacao: [
                    "E errado ter essa atitude em relação a produtos descartáveis porque eles contribuem significativamente para a poluição.",

                ]
            }
        ]
    }, 
    {
        enunciado: "Você costuma se informar sobre a destinação final dos resíduos que você gera? ",
        alternativas: [
            {
                texto: "Sim, sempre pesquiso e acompanho o destino dos meus resíduos.",
                afirmacao: [
                    "Você está no caminho certo, se informar sobre o destino dos seus resíduos é muito importante.",

                ]

            },
            {
                texto: "Nunca me informo, não vejo a necessidade.",
                afirmacao: [
                    "É errado, pois a falta de conhecimento pode contribuir para o descarte inadequado de lixo, agravando problemas como a poluição ambiental. ",

                ]
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
    botaoJogarNovamente.addEventListener("click", jogaNovamente);
}

function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

mostraPergunta();