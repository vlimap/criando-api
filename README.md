
# Documentação API de Gerenciamento de Usuários e Administradores

## Descrição

A API de Gerenciamento de Pessoas é uma interface de programação de aplicativos RESTful projetada para gerenciar informações de indivíduos e administradores em um sistema. Ela fornece um conjunto completo de operações CRUD (Criar, Ler, Atualizar e Deletar) que permitem interagir com os dados de pessoas e administradores de maneira eficiente e segura. A API é construída utilizando práticas modernas de desenvolvimento web, garantindo escalabilidade, segurança e facilidade de manutenção.

## Informações Gerais

- **Versão:** 1.0.0
- **Licença:** MIT
- **Servidor:** [http://localhost:3001](http://localhost:3001)

## Instalação e Configuração

### Pré-requisitos

- Node.js (versão 14.x ou superior)
- Docker (opcional, mas recomendado para facilitar a configuração do ambiente)
- Docker Compose (opcional)

### Passos para Configuração

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/vlimap/criando-api.git
   cd criando-api/backend
   ```

2. **Instale as Dependências**

   ```bash
   npm install
   ```

3. **Configure o Banco de Dados**

   Crie um arquivo `.env` na raiz do diretório `backend` com as seguintes variáveis de ambiente:

   ```plaintext
   DB_NAME=seu_nome_do_banco
   DB_USER=seu_usuario
   DB_PASS=sua_senha
   DB_HOST=localhost
   DB_PORT=3306
   ```
**Observação:**
Lembrar de instalar o driver apropriado para o banco que for usar. 

- Para MySQL:
```bash
   npm install mysql2
   ```
- Para PostgreSQL:
```bash
   npm install pg pg-hstore
   ```

- Para SQLite:
```bash
   npm install sqlite3
   ```
- Para MariaDB:
```bash
   npm install mariadb
   ```
- Para Microsoft SQL Server:
```bash
   npm install tedious
   ```
- Para Microsoft SQL Server:
```bash
   npm install tedious
   ```

4. **Rodar a Aplicação Backend**

   ```bash
   npm run dev
   ```

5. **Navegue até o Diretório do Frontend**

   ```bash
   cd ../frontend
   ```

6. **Instale as Dependências**

   ```bash
   npm install
   ```

7. **Rodar a Aplicação Frontend**

   ```bash
   npm start
   ```

8. **Usando Docker (Opcional)**

   Se preferir usar Docker, você pode subir toda a aplicação (backend e frontend) usando Docker Compose.

   ```bash
   cd ..
   docker-compose up --build
   ```

## Autenticação

A API utiliza autenticação JWT (JSON Web Token) para proteger suas rotas. Para acessar as rotas protegidas, é necessário incluir o token JWT no cabeçalho das requisições.

### Obter Token JWT

Para obter um token JWT, você precisa fazer login na API:

```bash
POST /api/login
```

#### Requisição

```json
{
  "email": "fulano@email.com",
  "senha": "senha123"
}
```

#### Resposta

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Use o token obtido no cabeçalho `Authorization` das requisições subsequentes:

```http
Authorization: Bearer <seu-token-jwt>
```

## Endpoints da API

### Usuários

#### Listar Todos os Usuários

```bash
GET /api/usuario
```

#### Cadastrar um Usuário

```bash
POST /api/usuario
```

#### Deletar Todos os Usuários

```bash
DELETE /api/usuario
```

#### Buscar um Usuário pelo ID

```bash
GET /api/usuario/{id}
```

#### Atualizar um Usuário pelo ID

```bash
PUT /api/usuario/{id}
```

#### Deletar um Usuário pelo ID

```bash
DELETE /api/usuario/{id}
```

### Administradores

#### Listar Todos os Administradores

```bash
GET /api/administrador
```

#### Cadastrar um Administrador

```bash
POST /api/administrador
```

#### Deletar Todos os Administradores

```bash
DELETE /api/administrador
```

#### Buscar um Administrador pelo ID

```bash
GET /api/administrador/{id}
```

#### Atualizar um Administrador pelo ID

```bash
PUT /api/administrador/{id}
```

#### Deletar um Administrador pelo ID

```bash
DELETE /api/administrador/{id}
```

## Modelos de Dados

### Usuário

```json
{
  "id": 1,
  "nome": "Fulano",
  "email": "fulano@email.com",
  "telefone": "84999999999",
  "cpf": "123.456.789-12",
  "endereco": "Rua Tal, 123",
  "data_nascimento": "1990-12-31",
  "senha": "senha123",
  "status": "ativo",
  "foto_perfil": "arquivo_binario",
  "api_key": "sua_api_key"
}
```

### Administrador

```json
{
  "id": 1,
  "nome": "Administrador Fulano",
  "email": "admin@fulano.com",
  "telefone": "84999999999",
  "cpf": "123.456.789-12",
  "endereco": "Rua Tal, 123",
  "data_nascimento": "1985-05-15",
  "senha": "admin123",
  "status": "ativo",
  "foto_perfil": "arquivo_binario",
  "api_key": "sua_api_key"
}
```

## Licença

Este projeto está licenciado sob os termos da licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
