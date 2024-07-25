# Usando a imagem oficial do Node.js como base
FROM node:18

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando todo o código da aplicação para o diretório de trabalho
COPY . .

# Expondo a porta em que a aplicação irá rodar
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["node", "src/index.js"]
