import express from "express";
const Projects = require("./../models/Projects");

interface ProjectsDTO {
  idProjeto?: Number;
  tipo_projeto?: String;
  titulo_projeto?: String;
  id_unidade_projeto?: Number;
  sigla_unidade_projeto?: String;
  nome_unidade_projeto?: String;
  coordenacao_projeto?: String;
  resumo_projeto?: String;
  keywords?: [String];
}

module.exports = {
  async add(request: express.Request, response: express.Response) {
    // #swagger.tags = ['Projects']
    // #swagger.description = 'Endpoint para adicionar um projeto.'

    // #swagger.parameters['idProjeto'] = { description: 'ID do projeto.' }
    // #swagger.parameters['tipo_projeto'] = { description: 'Tipo do projeto (Ensino, Pesquisa ou Extensão).' }
    // #swagger.parameters['titulo_projeto'] = { description: 'Titulo do projeto.' }
    // #swagger.parameters['id_unidade_projeto'] = { description: 'Id da unidade academica do projeto' }
    // #swagger.parameters['sigla_unidade_projeto'] = { description: 'Sigla da unidade academica.' }
    // #swagger.parameters['nome_unidade_projeto'] = { description: 'Nome da unidade do projeto.' }
    // #swagger.parameters['coordenacao_projeto'] = { description: 'Coordenador do projeto.' }
    // #swagger.parameters['resumo_projeto'] = { description: 'Resumo do projeto.' }
    // #swagger.parameters['keywords'] = { description: 'Palavras chaves do projeto (IA, Inteligencia, Artificial, ML, Active, Learning)' }
    const {
      idProjeto,
      tipo_projeto,
      titulo_projeto,
      id_unidade_projeto,
      sigla_unidade_projeto,
      nome_unidade_projeto,
      coordenacao_projeto,
      resumo_projeto,
      keywords,
    } = request.body;

    try {
      const project = await Projects.create({
        idProjeto,
        tipo_projeto,
        titulo_projeto,
        id_unidade_projeto,
        sigla_unidade_projeto,
        nome_unidade_projeto,
        coordenacao_projeto,
        resumo_projeto,
        keywords,
      });

      /* #swagger.responses[200] = { 
              schema: { $ref: "#/definitions/Project" },
              description: 'Projeto cadastrado.' 
      } */

      console.log(project);

      return response.json(project);
    } catch (err) {
      return response.status(500).json("Internal server error");
    }
  },

  async getTeachingProjects(
    request: express.Request,
    response: express.Response
  ) {
    // #swagger.tags = ['Projects']
    // #swagger.description = 'Endpoint para obter os projetos de ensino.'

    try {
      const teachingProjects: typeof Projects = await Projects.find({
        tipo_projeto: "Ensino",
      });

      return response.json({
        teachingProjects,
      });
    } catch (err) {
      return response.status(500);
    }
  },

  async getResearchProjects(
    request: express.Request,
    response: express.Response
  ) {
    // #swagger.tags = ['Projects']
    // #swagger.description = 'Endpoint para obter os projetos de pesquisa.'

    try {
      const researchProjects: typeof Projects = await Projects.find({
        tipo_projeto: "Pesquisa",
      });

      return response.json({
        researchProjects,
      });
    } catch (err) {
      return response.status(500);
    }
  },

  async getExtensionProjects(
    request: express.Request,
    response: express.Response
  ) {
    // #swagger.tags = ['Projects']
    // #swagger.description = 'Endpoint para obter os projetos de extensão.'

    try {
      const extensionProjects: typeof Projects = await Projects.find({
        tipo_projeto: "Extensão",
      });

      return response.json({
        extensionProjects,
      });
    } catch (err) {
      return response.status(500);
    }
  },

  async getTeachingProjectsWordcloud(
    request: express.Request,
    response: express.Response
  ) {
    // #swagger.tags = ['Projects']
    // #swagger.description = 'Endpoint para obter as palavras da wordcloud dos projetos de ensino.'

    try {
      let teachingProjects: typeof Projects = await Projects.find({
        tipo_projeto: "Ensino",
      });

      const words: { word: String; qnt: number }[] = [];

      // Adiciona cada palavra no array de words e a quantidade de ocorrencias
      // da palavra
      teachingProjects?.forEach((project: ProjectsDTO) => {
        project?.keywords?.forEach((w) => {
          const index = words.findIndex(
            (element: { word: String; qnt: number }) => element.word === w
          );

          if (index !== -1) {
            words[index].qnt = words[index].qnt + 1;
          } else {
            words.push({ word: w, qnt: 1 });
          }
        });
      });

      return response.json({
        words,
      });
    } catch (err) {
      return response.status(500);
    }
  },

  async getResearchProjectsWordcloud(
    request: express.Request,
    response: express.Response
  ) {
    // #swagger.tags = ['Projects']
    // #swagger.description = 'Endpoint para obter as palavras da wordcloud dos projetos de pesquisa.'

    try {
      let researchProjects: typeof Projects = await Projects.find({
        tipo_projeto: "Pesquisa",
      });

      const words: { word: String; qnt: number }[] = [];

      // Adiciona cada palavra no array de words e a quantidade de ocorrencias
      // da palavra
      researchProjects?.forEach((project: ProjectsDTO) => {
        project?.keywords?.forEach((w) => {
          const index = words.findIndex(
            (element: { word: String; qnt: number }) => element.word === w
          );

          if (index !== -1) {
            words[index].qnt = words[index].qnt + 1;
          } else {
            words.push({ word: w, qnt: 1 });
          }
        });
      });

      return response.json({
        words,
      });
    } catch (err) {
      return response.status(500);
    }
  },

  async getExtensionProjectsWordcloud(
    request: express.Request,
    response: express.Response
  ) {
    // #swagger.tags = ['Projects']
    // #swagger.description = 'Endpoint para obter as palavras da wordcloud dos projetos de extensão.'

    try {
      let extensionProjects: typeof Projects = await Projects.find({
        tipo_projeto: "Extensão",
      });

      const words: { word: String; qnt: number }[] = [];

      // Adiciona cada palavra no array de words e a quantidade de ocorrencias
      // da palavra
      extensionProjects?.forEach((project: ProjectsDTO) => {
        project?.keywords?.forEach((w) => {
          const index = words.findIndex(
            (element: { word: String; qnt: number }) => element.word === w
          );

          if (index !== -1) {
            words[index].qnt = words[index].qnt + 1;
          } else {
            words.push({ word: w, qnt: 1 });
          }
        });
      });

      return response.json({
        words,
      });
    } catch (err) {
      return response.status(500);
    }
  },

  async getTeachingProjectsWordcloudByAcademicUnit(
    request: express.Request,
    response: express.Response
  ) {
    // #swagger.tags = ['Projects']
    // #swagger.description = 'Endpoint para obter as palavras da wordcloud dos projetos de ensino.'

    // #swagger.parameters['nome_unidade_projeto'] = { description: 'Nome da unidade academica do projeto (INSTITUTO DE INFORMATICA)' }

    // remove acentos e coloca a string em maiusculo
    const nome_unidade_projeto = request.params.nome_unidade_projeto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();

    try {
      let teachingProjects: typeof Projects = await Projects.find({
        tipo_projeto: "Ensino",
        nome_unidade_projeto,
      });

      const words: { word: String; qnt: number }[] = [];

      // Adiciona cada palavra no array de words e a quantidade de ocorrencias
      // da palavra
      teachingProjects?.forEach((project: ProjectsDTO) => {
        project?.keywords?.forEach((w) => {
          const index = words.findIndex(
            (element: { word: String; qnt: number }) => element.word === w
          );

          if (index !== -1) {
            words[index].qnt = words[index].qnt + 1;
          } else {
            words.push({ word: w, qnt: 1 });
          }
        });
      });

      return response.json({
        words,
      });
    } catch (err) {
      return response.status(500);
    }
  },

  async getResearchProjectsWordcloudByAcademicUnit(
    request: express.Request,
    response: express.Response
  ) {
    // #swagger.tags = ['Projects']
    // #swagger.description = 'Endpoint para obter as palavras da wordcloud dos projetos de pesquisa.'

    // #swagger.parameters['nome_unidade_projeto'] = { description: 'Nome da unidade academica do projeto (INSTITUTO DE INFORMATICA)' }

    // remove acentos e coloca a string em maiusculo
    const nome_unidade_projeto = request.params.nome_unidade_projeto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();

    try {
      let researchProjects: typeof Projects = await Projects.find({
        tipo_projeto: "Pesquisa",
        nome_unidade_projeto,
      });

      const words: { word: String; qnt: number }[] = [];

      // Adiciona cada palavra no array de words e a quantidade de ocorrencias
      // da palavra
      researchProjects?.forEach((project: ProjectsDTO) => {
        project?.keywords?.forEach((w) => {
          const index = words.findIndex(
            (element: { word: String; qnt: number }) => element.word === w
          );

          if (index !== -1) {
            words[index].qnt = words[index].qnt + 1;
          } else {
            words.push({ word: w, qnt: 1 });
          }
        });
      });

      return response.json({
        words,
      });
    } catch (err) {
      return response.status(500);
    }
  },

  async getExtensionProjectsWordcloudByAcademicUnit(
    request: express.Request,
    response: express.Response
  ) {
    // #swagger.tags = ['Projects']
    // #swagger.description = 'Endpoint para obter as palavras da wordcloud dos projetos de extensão.'

    // #swagger.parameters['nome_unidade_projeto'] = { description: 'Nome da unidade academica do projeto (INSTITUTO DE INFORMATICA)' }

    // remove acentos e coloca a string em maiusculo
    const nome_unidade_projeto = request.params.nome_unidade_projeto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();

    try {
      let extensionProjects: typeof Projects = await Projects.find({
        tipo_projeto: "Extensão",
        nome_unidade_projeto,
      });

      const words: { word: String; qnt: number }[] = [];

      // Adiciona cada palavra no array de words e a quantidade de ocorrencias
      // da palavra
      extensionProjects?.forEach((project: ProjectsDTO) => {
        project?.keywords?.forEach((w) => {
          const index = words.findIndex(
            (element: { word: String; qnt: number }) => element.word === w
          );

          if (index !== -1) {
            words[index].qnt = words[index].qnt + 1;
          } else {
            words.push({ word: w, qnt: 1 });
          }
        });
      });

      return response.json({
        words,
      });
    } catch (err) {
      return response.status(500);
    }
  },
};
