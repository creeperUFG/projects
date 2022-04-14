import * as express from "express";

const ProjectsController = require("./controllers/ProjectsController");

const routes = express.Router();

// Add a new project
routes.post("/university/projects/add", ProjectsController.add);

// Get teaching projects
routes.get(
  "/university/projects/teaching",
  ProjectsController.getTeachingProjects
);

// Get research projects
routes.get(
  "/university/projects/research",
  ProjectsController.getResearchProjects
);

// Get extension projects
routes.get(
  "/university/projects/extension",
  ProjectsController.getExtensionProjects
);

// Get wordcloud teaching projects
routes.get(
  "/university/projects/teaching/wordcloud",
  ProjectsController.getTeachingProjectsWordcloud
);

// Get wordcloud research projects
routes.get(
  "/university/projects/research/wordcloud",
  ProjectsController.getResearchProjectsWordcloud
);

// Get wordcloud extension projects
routes.get(
  "/university/projects/extension/wordcloud",
  ProjectsController.getExtensionProjectsWordcloud
);

// Get wordcloud teaching projects from academic unit
routes.get(
  "/university/projects/teaching/wordcloud/:nome_unidade_projeto",
  ProjectsController.getTeachingProjectsWordcloudByAcademicUnit
);

// Get wordcloud research projects from academic unit
routes.get(
  "/university/projects/research/wordcloud/:nome_unidade_projeto",
  ProjectsController.getResearchProjectsWordcloudByAcademicUnit
);

// Get wordcloud extension projects from academic unit
routes.get(
  "/university/projects/extension/wordcloud/:nome_unidade_projeto",
  ProjectsController.getExtensionProjectsWordcloudByAcademicUnit
);

// Return projects by keywords
routes.post("/university/projects", ProjectsController.getProjectsByKeywords);

// Return projects by keywords
routes.post(
  "/university/projects/teaching",
  ProjectsController.getTeachingProjectsByKeywords
);

// Return projects by keywords
routes.post(
  "/university/projects/research",
  ProjectsController.getResearchProjectsByKeywords
);

// Return projects by keywords
routes.post(
  "/university/projects/extension",
  ProjectsController.getExtensionProjectsByKeywords
);

module.exports = routes;
