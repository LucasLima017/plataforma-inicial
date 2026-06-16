// Matriz de perguntas simulando uma estrutura vocacional robusta
const questions = [
{
  question: "Pensando no ambiente acadêmico, qual grupo de disciplinas mais desperta seu interesse?",
  options: [
    { text: "Lógica de Programação, Algoritmos, Estatística ou Computação.", category: "Tecnologia e Dados" },
    { text: "Física Mecânica, Álgebra Linear, Cálculo Avançado ou Química.", category: "Engenharia e Ciências Exatas" },
    { text: "Artes Visuais, História da Arte, Literatura ou Redação Criativa.", category: "Comunicação, Artes e Design" },
    { text: "Biologia Humana, Anatomia, Genética ou Fisiologia.", category: "Saúde e Bem-Estar" },
    { text: "Matemática Financeira, Economia Política ou Administração.", category: "Negócios, Gestão e Finanças" },
    { text: "História Geral, Filosofia, Sociologia Crítica ou Geopolítica.", category: "Humanas, Educação e Impacto Social" }
  ]
},
{
  question: "Por outro lado, qual tipo de estudo ou assunto você prefere manter distância?",
  options: [
    { text: "Passar horas decifrando linhas de código ou lidando com banco de dados.", category: "Menos Afinidade: Tecnologia e Dados" },
    { text: "Resolver equações físicas quilométricas ou desenhar plantas industriais.", category: "Menos Afinidade: Engenharia e Ciências Exatas" },
    { text: "Criar peças publicitárias, escrever textos longos ou fazer apresentações artísticas.", category: "Menos Afinidade: Comunicação, Artes e Design" },
    { text: "Lidar com rotinas hospitalares, biologia celular, ferimentos ou anatomia.", category: "Menos Afinidade: Saúde e Bem-Estar" },
    { text: "Analisar planilhas de custos, fluxo de caixa ou burocracias de contratos.", category: "Menos Afinidade: Negócios, Gestão e Finanças" },
    { text: "Ler extensos livros de filosofia clássica, leis jurídicas ou dar aulas.", category: "Menos Afinidade: Humanas, Educação e Impacto Social" }
  ]
},
{
    question: "Em um trabalho, o que mais te motiva?",
    options: [
      { text: "Desenvolver sistemas, softwares ou decifrar padrões em dados.", category: "Tecnologia e Dados" },
      { text: "Projetar estruturas, entender engrenagens ou criar soluções físicas.", category: "Engenharia e Ciências Exatas" },
      { text: "Criar identidades visuais, conceitos artísticos ou campanhas marcantes.", category: "Comunicação, Artes e Design" },
      { text: "Diagnosticar, tratar ou cuidar diretamente da saúde de pessoas.", category: "Saúde e Bem-Estar" },
      { text: "Bater metas financeiras, abrir vertentes de mercado ou gerenciar empresas.", category: "Negócios, Gestão e Finanças" },
      { text: "Transmitir conhecimento, defender direitos ou apoiar causas sociais.", category: "Humanas, Educação e Impacto Social" }
    ]
  },
  {
    question: "Qual destas situações você considera mais satisfatória?",
    options: [
      { text: "Construir uma automação ou resolver um bug complexo de código.", category: "Tecnologia e Dados" },
      { text: "Ver um projeto físico ou cálculo complexo funcionando na prática.", category: "Engenharia e Ciências Exatas" },
      { text: "Ver uma ideia criativa ou design autoral ganhando vida pública.", category: "Comunicação, Artes e Design" },
      { text: "Acompanhar a evolução clínica ou a melhora real de um paciente.", category: "Saúde e Bem-Estar" },
      { text: "Ver uma estratégia comercial trazer um retorno financeiro expressivo.", category: "Negócios, Gestão e Finanças" },
      { text: "Perceber que seu ensinamento ou conselho mudou o rumo da vida de alguém.", category: "Humanas, Educação e Impacto Social" }
    ]
  },
  {
    question: "Se participasse de um projeto em grupo, qual papel assumiria naturalmente?",
    options: [
      { text: "O arquiteto lógico: focado nas ferramentas tecnológicas e segurança.", category: "Tecnologia e Dados" },
      { text: "O técnico executor: calculista, focado na estrutura prática e métricas.", category: "Engenharia e Ciências Exatas" },
      { text: "O idealizador visual: responsável pela estética, storytelling e apresentação.", category: "Comunicação, Artes e Design" },
      { text: "O protetor do grupo: atento às necessidades individuais e ao clima da equipe.", category: "Saúde e Bem-Estar" },
      { text: "O líder estratégico: responsável pelos prazos, metas e distribuição de recursos.", category: "Negócios, Gestão e Finanças" },
      { text: "O articulador: mediador de conflitos intelectuais e focado no propósito do projeto.", category: "Humanas, Educação e Impacto Social" }
    ]
  },
  {
    question: "Como você costuma tomar decisões importantes?",
    options: [
      { text: "Analisando algoritmos de escolha, padrões anteriores e histórico digital.", category: "Tecnologia e Dados" },
      { text: "Calculando riscos objetivos, leis físicas e fatores exatos.", category: "Engenharia e Ciências Exatas" },
      { text: "Seguindo conceitos estéticos, intuição criativa e inovação conceitual.", category: "Comunicação, Artes e Design" },
      { text: "Avaliando as dores envolvidas e priorizando o equilíbrio emocional ou biológico.", category: "Saúde e Bem-Estar" },
      { text: "Ponderando a relação de custo-benefício, ROI e objetivos de longo prazo.", category: "Negócios, Gestão e Finanças" },
      { text: "Pensando na ética coletiva, no impacto social e nos valores humanos.", category: "Humanas, Educação e Impacto Social" }
    ]
  },
  {
    question: "O que você faria em um grande evento da escola ou faculdade?",
    options: [
      { text: "Configuraria a rede, as projeções digitais e os sistemas de inscrição.", category: "Tecnologia e Dados" },
      { text: "Planejaria a montagem do palco, logística de espaço e plantas técnicas.", category: "Engenharia e Ciências Exatas" },
      { text: "Criaria os cartazes, a edição dos vídeos e a divulgação nas redes.", category: "Comunicação, Artes e Design" },
      { text: "Montaria o posto de primeiros socorros ou cuidaria do suporte físico das pessoas.", category: "Saúde e Bem-Estar" },
      { text: "Negociaria com patrocinadores, controlaria o caixa e gerenciaría os fornecedores.", category: "Negócios, Gestão e Finanças" },
      { text: "Apresentaria o evento no palco ou atuaria na coordenação pedagógica dele.", category: "Humanas, Educação e Impacto Social" }
    ]
  },
  {
    question: "Qual destas habilidades você mais gostaria de desenvolver de forma profunda?",
    options: [
      { text: "Arquitetura de Inteligência Artificial ou Desenvolvimento Web.", category: "Tecnologia e Dados" },
      { text: "Modelagem 3D mecânica, automação industrial ou cálculo avançado.", category: "Engenharia e Ciências Exatas" },
      { text: "Direção de arte, redação publicitária ou design de experiência (UX).", category: "Comunicação, Artes e Design" },
      { text: "Anatomia humana, intervenções terapêuticas ou alta performance física.", category: "Saúde e Bem-Estar" },
      { text: "Análise de investimentos, metodologias ágeis de gestão ou negociação.", category: "Negócios, Gestão e Finanças" },
      { text: "Oratória jurídica, metodologias de ensino ou mediação de conflitos públicos.", category: "Humanas, Educação e Impacto Social" }
    ]
  },
  {
    question: "Qual frase mais combina com a sua forma de ver o mundo?",
    options: [
      { text: "Tudo no universo pode ser traduzido em dados e otimizado por código.", category: "Tecnologia e Dados" },
      { text: "Gosto de entender a engenharia por trás das coisas, do átomo aos edifícios.", category: "Engenharia e Ciências Exatas" },
      { text: "A criatividade e a forma como nos comunicamos movem o mundo.", category: "Comunicação, Artes e Design" },
      { text: "Preservar a vida e aliviar o sofrimento humano é a maior das prioridades.", category: "Saúde e Bem-Estar" },
      { text: "A organização eficiente e as finanças saudáveis geram a verdadeira evolução.", category: "Negócios, Gestão e Finanças" },
      { text: "A educação, as leis e a cultura constroem a base de uma sociedade forte.", category: "Humanas, Educação e Impacto Social" }
    ]
  },
  {
    question: "Qual tipo de desafio te deixa mais estimulado?",
    options: [
      { text: "Encontrar e fechar uma brecha de segurança em um sistema digital.", category: "Tecnologia e Dados" },
      { text: "Otimizar o consumo de energia ou o espaço físico de uma linha de produção.", category: "Engenharia e Ciências Exatas" },
      { text: "Fazer uma marca pouco conhecida viralizar através de uma estratégia visual.", category: "Comunicação, Artes e Design" },
      { text: "Identificar a causa de um sintoma complexo que ninguém conseguiu decifrar.", category: "Saúde e Bem-Estar" },
      { text: "Reestruturar uma empresa que está operando no prejuízo para fazê-la lucrar.", category: "Negócios, Gestão e Finanças" },
      { text: "Criar um plano de inclusão educacional para uma comunidade vulnerável.", category: "Humanas, Educação e Impacto Social" }
    ]
  },
  {
    question: "Se você recebesse verba para criar um projeto do zero, qual seria?",
    options: [
      { text: "Uma startup baseada em inteligência artificial ou plataforma SaaS.", category: "Tecnologia e Dados" },
      { text: "Uma fábrica moderna ou um projeto inovador de energia limpa e renovável.", category: "Engenharia e Ciências Exatas" },
      { text: "Um estúdio criativo focado em design de jogos, cinema ou branding de marcas.", category: "Comunicação, Artes e Design" },
      { text: "Um centro médico integrado com tratamentos preventivos e fisioterapia.", category: "Saúde e Bem-Estar" },
      { text: "Uma holding de investimentos ou uma empresa global de e-commerce.", category: "Negócios, Gestão e Finanças" },
      { text: "Uma escola de liderança comunitária ou um escritório de advocacia pro bono.", category: "Humanas, Educação e Impacto Social" }
    ]
  },
  {
    question: "Como as pessoas costumam recorrer a você no dia a dia?",
    options: [
      { text: "Para consertar falhas em aparelhos, sugerir apps ou resolver problemas digitais.", category: "Tecnologia e Dados" },
      { text: "Para consertos mecânicos, lógica pura ou entender como um objeto funciona.", category: "Tecnologia e Engenharia e Ciências Exatas" },
      { text: "Para pedir opiniões estéticas, ajuda com textos ou ideias fora da caixa.", category: "Comunicação, Artes e Design" },
      { text: "Para desabafar, buscar acolhimento emocional ou dicas de saúde/treino.", category: "Saúde e Bem-Estar" },
      { text: "Para organizar cronogramas, planejar finanças ou resolver burocracias.", category: "Negócios, Gestão e Finanças" },
      { text: "Para entender dilemas sociais, debater opiniões ou pedir ajuda em estudos.", category: "Humanas, Educação e Impacto Social" }
    ]
  },
  {
    question: "O que você considera o maior indicador de sucesso em uma carreira?",
    options: [
      { text: "Criar uma tecnologia disruptiva que mude a rotina digital da sociedade.", category: "Tecnologia e Dados" },
      { text: "Deixar sua marca em grandes obras de infraestrutura ou inovações físicas.", category: "Engenharia e Ciências Exatas" },
      { text: "Ter reconhecimento público por sua propriedade intelectual, arte ou ideias.", category: "Comunicação, Artes e Design" },
      { text: "Saber que suas mãos ou tratamentos salvaram ou estenderam vidas.", category: "Saúde e Bem-Estar" },
      { text: "Construir um império corporativo estável, lucrativo e escalável.", category: "Negócios, Gestão e Finanças" },
      { text: "Contribuir diretamente para a redução das desigualdades e evolução intelectual.", category: "Humanas, Educação e Impacto Social" }
    ]
  },
  {
    question: "Se você ganhasse um passe livre para uma conferência internacional, qual escolheria?",
    options: [
      { text: "Uma feira mundial sobre Inteligência Artificial, Big Data e Computação.", category: "Tecnologia e Dados" },
      { text: "Um simpósio de robótica industrial, aeroespacial ou grandes construções.", category: "Engenharia e Ciências Exatas" },
      { text: "Um festival global de criatividade digital, cinema e artes visuais.", category: "Comunicação, Artes e Design" },
      { text: "Um congresso internacional de neurociência, medicina do esporte ou psicologia.", category: "Saúde e Bem-Estar" },
      { text: "O Fórum Econômico Mundial sobre empreendedorismo e tendências de mercado.", category: "Negócios, Gestão e Finanças" },
      { text: "Um fórum global da ONU sobre direitos humanos, educação e políticas sociais.", category: "Humanas, Educação e Impacto Social" }
    ]
  },
  {
  question: "Se você pudesse dominar uma área do conhecimento hoje, qual escolheria?",
  options: [
    { text: "Escrever códigos impecáveis e construir sistemas tecnológicos complexos.", category: "Tecnologia e Dados" },
    { text: "Compreender engrenagens, física avançada e projetar estruturas reais.", category: "Engenharia e Ciências Exatas" },
    { text: "Dar vida a ideias visuais impressionantes e emocionar pessoas com arte.", category: "Comunicação, Artes e Design" },
    { text: "Decifrar o funcionamento do corpo e da mente para curar ou salvar vidas.", category: "Saúde e Bem-Estar" },
    { text: "Identificar oportunidades de lucros massivos e liderar grandes corporações.", category: "Negócios, Gestão e Finanças" },
    { text: "Dominar as leis, defender direitos humanos ou ensinar com maestria.", category: "Humanas, Educação e Impacto Social" }
  ]
}
]

// Estado do Quiz
let currentQuestionIndex = 0;
const userAnswers = []; // Vai guardar o que o usuário escolher

// Elementos da DOM
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionCounter = document.getElementById("question-counter");
const progressBar = document.getElementById("progress");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

// Inicializa o Quiz
function initQuiz() {
  loadQuestion();
}

// Carrega a pergunta atual na tela
function loadQuestion() {
  const currentQ = questions[currentQuestionIndex];
  
  // Atualiza Textos e Progresso
  questionText.innerText = currentQ.question;
  questionCounter.innerText = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
  progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

  // Limpa opções antigas
  optionsContainer.innerHTML = "";

  // Renderiza botões de opção
  currentQ.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.innerText = option.text;
    
    // Se essa opção já foi escolhida antes (caso o usuário tenha voltado)
    if (userAnswers[currentQuestionIndex] === option.category) {
      btn.classList.add("selected");
      btnNext.disabled = false; // Libera o botão "Próxima"
    }

    btn.addEventListener("click", () => selectOption(btn, option.category));
    optionsContainer.appendChild(btn);
  });

  // Controle dos botões de navegação
  btnPrev.disabled = currentQuestionIndex === 0;
  
  // Muda o texto do botão final se for a última pergunta
  if (currentQuestionIndex === questions.length - 1) {
    btnNext.innerText = "Finalizar e Ver Resultado";
  } else {
    btnNext.innerText = "Próxima";
  }

  // Se o usuário ainda não respondeu essa pergunta, trava o botão Próxima
  if (!userAnswers[currentQuestionIndex]) {
    btnNext.disabled = true;
  }
}

// Lida com a seleção de uma opção
function selectOption(selectedBtn, category) {
  // Remove a classe 'selected' de todos os botões
  const allBtns = optionsContainer.querySelectorAll(".option-btn");
  allBtns.forEach(b => b.classList.remove("selected"));

  // Adiciona 'selected' ao botão clicado
  selectedBtn.classList.add("selected");

  // Salva a resposta no Array
  userAnswers[currentQuestionIndex] = category;

  // Libera botão de avançar
  btnNext.disabled = false;
}

// Botão: Próxima
btnNext.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    finishQuiz();
  }
});

// Botão: Anterior
btnPrev.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
});

// Finaliza o Quiz (Onde o Backend/IA vai entrar futuramente)
function finishQuiz() {
  console.log("Respostas do Usuário coletadas:", userAnswers);
  
  // Por enquanto, apenas um feedback visual
  optionsContainer.innerHTML = "";
  questionCounter.innerText = "Analisando perfil...";
  progressBar.style.width = "100%";
  questionText.innerText = "No futuro, a IA do Nexify assumirá a partir daqui para gerar seu perfil completo.";
  
  btnPrev.style.display = "none";
  btnNext.style.display = "none";
}

// Roda ao carregar a página
initQuiz();