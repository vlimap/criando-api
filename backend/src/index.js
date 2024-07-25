require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/configBD');
const rotaUsuario = require('./modulos/usuario/routes/routes');
const rotaAdministrador = require('./modulos/administrador/routes/routes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

// Middleware para CORS
app.use(cors());

// Servir arquivos estáticos para uploads
app.use('/uploads', express.static(path.join(__dirname, 'modulos/usuario/upload')));

// Carregar documentação Swagger
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger', 'swagger.yaml'));

// Rotas da aplicação
app.use('/api', rotaUsuario);
app.use('/api', rotaAdministrador);

// Rota de documentação da API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar o servidor e sincronizar o banco de dados
const port = process.env.PORT || 3001;
app.listen(port, async () => {
    console.log(`Servidor rodando na porta ${port}!`);
    try {
        await sequelize.sync({ force: false });
        console.log('Conexão estabelecida com o banco e sincronizado.'); 
    } catch (error) {
        console.error('Erro ao sincronizar o modelo de banco de dados', error);
    }
});
