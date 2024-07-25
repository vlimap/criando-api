# Usando a imagem oficial do Node.js como base
FROM node:18 AS build

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando todo o código da aplicação para o diretório de trabalho
COPY . .

# Construindo a aplicação React
RUN npm run build

# Usando uma imagem Nginx para servir a aplicação
FROM nginx:alpine

# Copiando os arquivos buildados do React para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copiando a configuração customizada do Nginx
COPY default.conf /etc/nginx/conf.d/default.conf

# Expondo a porta padrão do Nginx
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
