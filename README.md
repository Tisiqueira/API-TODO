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

⚙️ Detalhamento das funcionalidades

POST /tasks
Criar uma nova tarefa com title (string) e description (string, opcional).

GET /tasks
Listar todas as tarefas.

PUT /tasks/:id
Atualizar título, descrição ou status (done: true/false) de uma tarefa.

DELETE /tasks/:id
Excluir uma tarefa pelo ID.

🐳 Banco de Dados com Docker

Crie um docker-compose.yml para subir um container PostgreSQL com variáveis de ambiente (usuário, senha, banco). Conecte o app ao banco.

🚨 Validações

- title é obrigatório.

- Middleware deve validar se o id passado existe no banco antes de atualizar/excluir.

- Middleware global para tratamento de erros.
