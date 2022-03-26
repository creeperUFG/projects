import * as mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
  idProjeto: Number,
  tipo_projeto: String,
  titulo_projeto: String,
  id_unidade_projeto: Number,
  sigla_unidade_projeto: String,
  nome_unidade_projeto: String,
  coordenacao_projeto: String,
  resumo_projeto: String,
  keywords: [String],
});

module.exports = mongoose.model("Projects", ProjectsSchema);
