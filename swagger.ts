const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes.ts"];

const doc = {
  info: {
    version: "1.0.0",
    title: "Projects API",
    description:
      "Documentation automatically generated by the <b>swagger-autogen</b> module.",
  },
  host: "ufg-impacto-projects-service.herokuapp.com",
  basePath: "/",
  schemes: ["https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  definitions: {
    Project: {
      idProjeto: 16080,
      tipo_projeto: "Pesquisa",
      titulo_projeto:
        "A SINALIZAÇÃO QUIMIOSSENSORIAL NA COMUNICAÇÃO SEXUAL E REPRODUTIVA HUMANA",
      id_unidade_projeto: 1253,
      sigla_unidade_projeto: "CISAU-JAT",
      nome_unidade_projeto: "UNID. ACAD. ESP/CIENCIAS DA SAUDE-JATA",
      coordenacao_projeto: "MARIANNE LUCENA DA SILVA",
      resumo_projeto:
        "Introdução: Feromônios consistem em substâncias químicas extracorporais especializadas que provocam uma resposta fisiológica ou comportamental atuando sobre outros organismos da mesma espécie. O nervo terminalis modula a atividade do epitélio olfatório, o que torna os feromônios mais detectáveis aos nervos olfatórios. Apesar de haver vários artigos na literatura sobre o tema, ainda não está clara a relação entre quimiossinais humanos e reprodução, devido, sobretudo, às dificuldades metodológicas do tema e uma heterogeneidade nos artigos. Objetivos: avaliar as evidências disponíveis sobre os a sinalização quimiossensorial na comunicação sexual e reprodutiva humana. Métodos: As bases de dados serão: CENTRAL via Cochrane Library, MEDLINE via PUBMED, LILACS via BVS, EMBASE, Web of Science e Cinahl. Estudos completos e disponíveis; experimentais do tipo Ensaio Clínico Randomizado; que avaliarem a relação entre sinalização quimiossenssorial e comportamento sexual ou reprodutivo em amostras de qualquer idade e sexo. Estudos que não utilizaram sinais químicos humanos ou sintéticos baseados em odores corporais serão excluídos.\r\n",
      keywords: [
        "Introdução",
        "Feromônios",
        "consistem",
        "substâncias",
        "químicas",
        "extracorporais",
        "especializadas",
        "provocam",
        "resposta",
        "fisiológica",
        "comportamental",
        "atuando",
        "sobre",
        "outros",
        "organismos",
        "mesma",
        "espécie",
        "O",
        "nervo",
        "terminalis",
        "modula",
        "atividade",
        "epitélio",
        "olfatório",
        "torna",
        "feromônios",
        "detectáveis",
        "nervos",
        "olfatórios",
        "Apesar",
        "haver",
        "vários",
        "artigos",
        "literatura",
        "sobre",
        "tema",
        "ainda",
        "clara",
        "relação",
        "quimiossinais",
        "humanos",
        "reprodução",
        "devido",
        "sobretudo",
        "dificuldades",
        "metodológicas",
        "tema",
        "heterogeneidade",
        "artigos",
        "Objetivos",
        "avaliar",
        "evidências",
        "disponíveis",
        "sobre",
        "sinalização",
        "quimiossensorial",
        "comunicação",
        "sexual",
        "reprodutiva",
        "humana",
        "Métodos",
        "As",
        "bases",
        "dados",
        "CENTRAL",
        "via",
        "Cochrane",
        "Library",
        "MEDLINE",
        "via",
        "PUBMED",
        "LILACS",
        "via",
        "BVS",
        "EMBASE",
        "Web",
        "of",
        "Science",
        "Cinahl",
        "Estudos",
        "completos",
        "disponíveis",
        "experimentais",
        "tipo",
        "Ensaio",
        "Clínico",
        "Randomizado",
        "avaliarem",
        "relação",
        "sinalização",
        "quimiossenssorial",
        "comportamento",
        "sexual",
        "reprodutivo",
        "amostras",
        "qualquer",
        "idade",
        "sexo",
        "Estudos",
        "utilizaram",
        "sinais",
        "químicos",
        "humanos",
        "sintéticos",
        "baseados",
        "odores",
        "corporais",
        "excluídos",
      ],
    },
    AddProject: {
      idProjeto: 16080,
      tipo_projeto: "Pesquisa",
      titulo_projeto:
        "A SINALIZAÇÃO QUIMIOSSENSORIAL NA COMUNICAÇÃO SEXUAL E REPRODUTIVA HUMANA",
      id_unidade_projeto: 1253,
      sigla_unidade_projeto: "CISAU-JAT",
      nome_unidade_projeto: "UNID. ACAD. ESP/CIENCIAS DA SAUDE-JATA",
      coordenacao_projeto: "MARIANNE LUCENA DA SILVA",
      resumo_projeto:
        "Introdução: Feromônios consistem em substâncias químicas extracorporais especializadas que provocam uma resposta fisiológica ou comportamental atuando sobre outros organismos da mesma espécie. O nervo terminalis modula a atividade do epitélio olfatório, o que torna os feromônios mais detectáveis aos nervos olfatórios. Apesar de haver vários artigos na literatura sobre o tema, ainda não está clara a relação entre quimiossinais humanos e reprodução, devido, sobretudo, às dificuldades metodológicas do tema e uma heterogeneidade nos artigos. Objetivos: avaliar as evidências disponíveis sobre os a sinalização quimiossensorial na comunicação sexual e reprodutiva humana. Métodos: As bases de dados serão: CENTRAL via Cochrane Library, MEDLINE via PUBMED, LILACS via BVS, EMBASE, Web of Science e Cinahl. Estudos completos e disponíveis; experimentais do tipo Ensaio Clínico Randomizado; que avaliarem a relação entre sinalização quimiossenssorial e comportamento sexual ou reprodutivo em amostras de qualquer idade e sexo. Estudos que não utilizaram sinais químicos humanos ou sintéticos baseados em odores corporais serão excluídos.\r\n",
      keywords: [
        "Introdução",
        "Feromônios",
        "consistem",
        "substâncias",
        "químicas",
        "extracorporais",
        "especializadas",
        "provocam",
        "resposta",
        "fisiológica",
        "comportamental",
        "atuando",
        "sobre",
        "outros",
        "organismos",
        "mesma",
        "espécie",
        "O",
        "nervo",
        "terminalis",
        "modula",
        "atividade",
        "epitélio",
        "olfatório",
        "torna",
        "feromônios",
        "detectáveis",
        "nervos",
        "olfatórios",
        "Apesar",
        "haver",
        "vários",
        "artigos",
        "literatura",
        "sobre",
        "tema",
        "ainda",
        "clara",
        "relação",
        "quimiossinais",
        "humanos",
        "reprodução",
        "devido",
        "sobretudo",
        "dificuldades",
        "metodológicas",
        "tema",
        "heterogeneidade",
        "artigos",
        "Objetivos",
        "avaliar",
        "evidências",
        "disponíveis",
        "sobre",
        "sinalização",
        "quimiossensorial",
        "comunicação",
        "sexual",
        "reprodutiva",
        "humana",
        "Métodos",
        "As",
        "bases",
        "dados",
        "CENTRAL",
        "via",
        "Cochrane",
        "Library",
        "MEDLINE",
        "via",
        "PUBMED",
        "LILACS",
        "via",
        "BVS",
        "EMBASE",
        "Web",
        "of",
        "Science",
        "Cinahl",
        "Estudos",
        "completos",
        "disponíveis",
        "experimentais",
        "tipo",
        "Ensaio",
        "Clínico",
        "Randomizado",
        "avaliarem",
        "relação",
        "sinalização",
        "quimiossenssorial",
        "comportamento",
        "sexual",
        "reprodutivo",
        "amostras",
        "qualquer",
        "idade",
        "sexo",
        "Estudos",
        "utilizaram",
        "sinais",
        "químicos",
        "humanos",
        "sintéticos",
        "baseados",
        "odores",
        "corporais",
        "excluídos",
      ],
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./src/config/server");
});
