import string
from nltk.tokenize import word_tokenize
import nltk
import json
import requests

stopwords = nltk.corpus.stopwords.words('portuguese')


def removeStopWords(text):
    text_tokens = word_tokenize(text)

    punctuation = []

    for c in string.punctuation:
        punctuation.append(c)

    tokens_without_sw = [word for word in text_tokens if not word in stopwords]
    tokens_without_sw = [
        word for word in tokens_without_sw if not word in punctuation]

    return tokens_without_sw


ensino = json.load(open('projetos_ensino.json'))
pesquisa = json.load(open('projetos_pesquisa.json'))
extensao = json.load(open('projetos_extensao.json'))

for i in ensino:
    json = {"idProjeto": i["idProjeto"] if "idProjeto" in i else "", "tipo_projeto": i["tipo_projeto"] if "tipo_projeto" in i else "", "titulo_projeto": i["titulo_projeto"] if "titulo_projeto" in i else "", "id_unidade_projeto": i["id_unidade_projeto"] if "id_unidade_projeto" in i else "", "sigla_unidade_projeto": i["sigla_unidade_projeto"] if "sigla_unidade_projeto" in i else "",
            "nome_unidade_projeto": i["nome_unidade_projeto"] if "nome_unidade_projeto" in i else "", "coordenacao_projeto": i["coordenacao_projeto"] if "coordenacao_projeto" in i else "", "resumo_projeto": i["resumo_projeto"] if "resumo_projeto" in i else "", "keywords": removeStopWords(i["resumo_projeto"]) if "resumo_projeto" in i else ""}
    requests.post("http://localhost:3344/university/projects/add", json=json)

for i in pesquisa:
    json = {"idProjeto": i["idProjeto"] if "idProjeto" in i else "", "tipo_projeto": i["tipo_projeto"] if "tipo_projeto" in i else "", "titulo_projeto": i["titulo_projeto"] if "titulo_projeto" in i else "", "id_unidade_projeto": i["id_unidade_projeto"] if "id_unidade_projeto" in i else "", "sigla_unidade_projeto": i["sigla_unidade_projeto"] if "sigla_unidade_projeto" in i else "",
            "nome_unidade_projeto": i["nome_unidade_projeto"] if "nome_unidade_projeto" in i else "", "coordenacao_projeto": i["coordenacao_projeto"] if "coordenacao_projeto" in i else "", "resumo_projeto": i["resumo_projeto"] if "resumo_projeto" in i else "", "keywords": removeStopWords(i["resumo_projeto"]) if "resumo_projeto" in i else ""}
    requests.post("http://localhost:3344/university/projects/add", json=json)

for i in extensao:
    json = {"idProjeto": i["idProjeto"] if "idProjeto" in i else "", "tipo_projeto": i["tipo_projeto"] if "tipo_projeto" in i else "", "titulo_projeto": i["titulo_projeto"] if "titulo_projeto" in i else "", "id_unidade_projeto": i["id_unidade_projeto"] if "id_unidade_projeto" in i else "", "sigla_unidade_projeto": i["sigla_unidade_projeto"] if "sigla_unidade_projeto" in i else "",
            "nome_unidade_projeto": i["nome_unidade_projeto"] if "nome_unidade_projeto" in i else "", "coordenacao_projeto": i["coordenacao_projeto"] if "coordenacao_projeto" in i else "", "resumo_projeto": i["resumo_projeto"] if "resumo_projeto" in i else "", "keywords": removeStopWords(i["resumo_projeto"]) if "resumo_projeto" in i else ""}
    requests.post("http://localhost:3344/university/projects/add", json=json)
