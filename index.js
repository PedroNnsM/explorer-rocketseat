const elementoResposta = document.querySelector('#resposta');
const inputPergunta = document.querySelector('#inputPergunta');


const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]


// clicar em fazer pergunta
function fazerPergunta() {
    // pegar o valor do input
    if(inputPergunta.value === '') {
        alert('Digite uma pergunta!');
        return;
    }

    const pergunta = "<div>"  + inputPergunta.value + "</div>";

    // gerar um número aleatório
    const totalRespostas = respostas.length;
    // gerar resposta aleatória
    const  numeroAleatorio = Math.floor(Math.random() * totalRespostas);

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];

    // sumir a resposta depois de 3 segundos
    setTimeout(function() {
        elementoResposta.style.opacity = 0; document.location.reload(true) 
    }, 3000);

        
}
    

