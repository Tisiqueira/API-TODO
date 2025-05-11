# API-TODO

# 🧪 Teste Técnico Simulado – API de Gerenciamento de Tarefas (ToDo API)

📋 Descrição do desafio
Você deve construir uma API RESTful para gerenciar uma lista de tarefas (ToDo). A API deve permitir que usuários:

- Criem tarefas

- Listem todas as tarefas

- Atualizem o status (concluída/não concluída) de uma tarefa

- Excluam tarefas

# 📌 Requisitos Técnicos

- Node.js com Express

- Banco de dados PostgreSQL (via Docker)

- Padrão de projeto: Controller + Repository

- Middlewares de log, validação e tratamento de erros

- Validação assíncrona de dados

- Documentação da API via Swagger ou README detalhado

- Separação em camadas (routes, controllers, services/repositories, models)

# ⚙️ Detalhamento das funcionalidades

POST /tasks
- Criar uma nova tarefa com title (string) e description (string, opcional).

GET /tasks
- Listar todas as tarefas.

PUT /tasks/:id
- Atualizar título, descrição ou status (done: true/false) de uma tarefa.

DELETE /tasks/:id
- Excluir uma tarefa pelo ID.

# 🐳 Banco de Dados com Docker

Crie um docker-compose.yml para subir um container PostgreSQL com variáveis de ambiente (usuário, senha, banco). Conecte o app ao banco.

# 🚨 Validações

- title é obrigatório.

- Middleware deve validar se o id passado existe no banco antes de atualizar/excluir.

- Middleware global para tratamento de erros.

# Detalhes do projeto

## 📋 Sumário

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Banco de Dados com Docker](#banco-de-dados-com-docker)
- [Inicialização do Servidor](#inicialização-do-servidor)
- [Acesso à API](#acesso-à-api)
- [Documentação Swagger](#documentação-swagger)
- [Scripts SQL](#scripts-sql)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

---

## ✅ Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 📦 Instalação

1. Clone o repositório:

```bash
git https://github.com/Tisiqueira/API-TODO.git
cd API-TODO.git
```

2. Instale as dependências:

```bash
npm install
```

---

## 🐘 Banco de Dados com Docker

Suba o container PostgreSQL com os scripts de criação:

```bash
docker-compose up -d
```

Isso criará um container com:
- Banco de dados: `pgtodo`
- Usuário: `root`
- Senha: `root`
- Scripts executados:
  - `0-create-database.sql`
  - `1-create-table.sql`

---

## ▶️ Inicialização do Servidor

Inicie o servidor com:

```bash
npm start
```

> O servidor será executado na porta **3001** usando `nodemon`.

---

## 🔗 Acesso à API

- **URL base:** `http://localhost:3001`
- **Porta:** `3001`
- **Banco de Dados:**
  - **Host:** `localhost`
  - **Porta:** `5432`
  - **Usuário:** `root`
  - **Senha:** `root`
  - **Banco:** `pgtodo`

---

## 📚 Documentação Swagger

Acesse a documentação interativa da API via Swagger:

```
http://localhost:3001/api-docs
```

---

## 🗂️ Scripts SQL

Os arquivos SQL responsáveis por criar o banco e as tabelas estão na pasta `/scripts`:

- `0-create-database.sql`
- `1-create-table.sql`

Eles são executados automaticamente ao subir o Docker pela primeira vez.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Docker / Docker Compose
- Swagger (swagger-jsdoc + swagger-ui-express)
- ESLint
- UUID
- Nodemon

